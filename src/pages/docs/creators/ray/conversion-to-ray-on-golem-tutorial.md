---
title: Converting a real-life use case to Ray on Golem
description: Learn how to parallelize an app with Ray on Golem, from setting up the cluster to running the script. Ideal for developers seeking efficient computing solutions.
type: example
---

# Converting a real-life use case to Ray on Golem

This tutorial explains step-by-step how to parallelize an example app, set Ray on Golem cluster up, run the script on the cluster, and finally stop the cluster.

The parallelization part is also explained in our PoC demo video

{% youtube link="https://www.youtube.com/watch?v=IneVyiVdMKQ" %}
{% /youtube %}

## The example Double Dummy Solver app

{% partial file="ray/recommend-venv.md" /%}

In our case, the application is a very simple script running a simple bridge (the card game) simulation.

Download our [example bridge script](https://github.com/golemfactory/ray-on-golem/raw/main/examples/dds.py)

```bash
# Download the example bridge app
wget https://github.com/golemfactory/ray-on-golem/raw/main/examples/dds.py
```

The script uses the [endplay library](https://pypi.org/project/endplay/)

```bash
# Install endplay lib (recommended within a clean virtual environment)
pip3 install endplay==0.4.11b0
```

When you run the code it randomly generates 50 bridge deals and for each deal, it calculates potential winnings for each player and each trump suit - `get_deal()` and `get_lots_of_deals()` functions.
It prints the results in a rather cryptic bridge language. You can learn more on [endplay docs site](https://endplay.readthedocs.io/en/latest/pages/readme/04_tutorial.html#dd-tables).

Finally, the code outputs the time it took to calculate all the deals.

In this form, it works in a very single-threaded way - it waits for each deal to be calculated before starting with the next one.

```bash
# Run the example bridge app
python3 dds.py
```

```
['N:K53.4.J652.KQJ98 AJ8.T863.T98.A64 T62.AKQ7.Q43.T75 Q974.J952.AK7.32 ♣,♦,♥,♠,NT;N:8,7,6,6,7;E:4,6,7,7,6;S:8,7,6,6,7;W:4,6,7,7,6', 'N:J.J543.KQJ75.KQ9 A843.AKQ.A63.AT4 KQ2.92.942.J8653 T9765.T876.T8.72 ♣,♦,♥,♠,NT;N:7,7,5,4,6;E:5,6,8,9,6;S:7,7,5,4,6;W:5,6,8,9,6', 'N:4.973.T643.KQ753 KT32.AK4.J2.9864 AQ87.QT8.AKQ98.2 J965.J652.75.AJT ♣,♦,♥,♠,NT;N:8,10,8,7,8;E:4,3,5,6,4;S:8,10,8,7,8;W:4,3,4,6,4', 'N:AQ84.Q.984.AT853 K2.A8432.652.976 J53.J975.AQ7.J42 T976.KT6.KJT3.KQ ♣,♦,♥,♠,NT;N:8,5,4,7,6;E:5,7,8,6,6;S:8,5,5,7,7;W:5,7,8,6,6', 'N:3.K64.AKJT9.AT93 K7652.J72.764.74 JT94.AQT93.82.65 AQ8.85.Q53.KQJ82 ♣,♦,♥,♠,NT;N:7,11,11,8,10;E:5,2,1,5,2;S:7,11,11,8,10;W:5,2,1,5,2', 'N:.T932.A983.T9832 742.A875.T75.KQ4 AKJ9853.Q.J4.AJ7 QT6.KJ64.KQ62.65 ♣,♦,♥,♠,NT;N:9,6,5,9,6;E:3,7,8,4,5;S:9,6,5,9,6;W:3,7,8,4,6', 'N:JT.AKQ43.KQJT3.6 Q984.J986.87.A42 K752.7.942.KT985 A63.T52.A65.QJ73 ♣,♦,♥,♠,NT;N:7,10,9,7,7;E:6,3,4,6,5;S:7,10,9,7,7;W:6,3,4,6,5', 'N:JT84.K94.T6.T763 5.A2.QJ74.AKJ985 Q93.QT765.K32.42 AK762.J83.A985.Q ♣,♦,♥,♠,NT;N:0,0,4,2,0;E:13,13,9,10,13;S:0,0,4,2,0;W:13,13,8,10,13', 'N:7.JT87.QJT94.983 K83.A943.8632.K2 QJT6542.Q5.K.AJ7 A9.K62.A75.QT654 ♣,♦,♥,♠,NT;N:3,5,4,6,3;E:9,8,9,7,10;S:3,5,4,6,3;W:9,8,9,7,10', 'N:KQ542.9.953.J975 J.76432.AKJ6.KQ2 A9863.A85.T4.A83 T7.KQJT.Q872.T64 ♣,♦,♥,♠,NT;N:8,3,4,9,7;E:5,8,9,3,6;S:8,3,4,9,7;W:5,8,9,3,6', 'N:AK.A932.6.JT7643 654.T.KQ732.KQ92 JT93.QJ874.9.A85 Q872.K65.AJT854. ♣,♦,♥,♠,NT;N:9,3,9,5,7;E:4,10,3,7,5;S:9,3,9,5,7;W:4,10,4,8,5', 'N:T3.872.AQ5432.93 AKQ8.KT6.T8.8762 542.943.KJ.KQJT4 J976.AQJ5.976.A5 ♣,♦,♥,♠,NT;N:6,7,3,3,4;E:7,6,9,10,7;S:6,7,3,3,4;W:7,6,9,10,7', 'N:K9.AJT3.KJ953.K6 J7432.2.T864.Q92 AQT5.Q84.AQ2.AJ3 86.K9765.7.T8754 ♣,♦,♥,♠,NT;N:11,13,11,12,13;E:2,0,2,1,0;S:11,13,11,12,13;W:2,0,2,1,0', 'N:K875.T94.A63.Q64 JT92.AK762.J75.K Q64.J5.Q942.AJ82 A3.Q83.KT8.T9753 ♣,♦,♥,♠,NT;N:6,6,3,6,5;E:7,6,9,7,7;S:6,6,4,6,5;W:7,6,9,7,7', 'N:753.K8763.Q4.Q63 AKQ96.A4.9865.72 JT842.Q95.J32.98 .JT2.AKT7.AKJT54 ♣,♦,♥,♠,NT;N:2,1,4,3,2;E:11,12,9,9,10;S:2,1,4,3,2;W:11,12,9,10,9', 'N:A85.K5.T43.A9763 92.T964.K8762.QJ J74.QJ872.QJ5.54 KQT63.A3.A9.KT82 ♣,♦,♥,♠,NT;N:4,4,6,3,3;E:8,8,7,9,9;S:4,4,6,3,3;W:8,8,7,9,9', 'N:Q987.5.KJT965.A2 64.AK8.A82.K8643 AKT3.J743.Q743.Q J52.QT962..JT975 ♣,♦,♥,♠,NT;N:3,11,3,9,5;E:9,2,9,2,6;S:3,11,3,10,5;W:9,2,9,2,6', 'N:K63.KQT95.K853.A J542.43.Q6.98742 QT97.82.T94.KQ63 A8.AJ76.AJ72.JT5 ♣,♦,♥,♠,NT;N:7,8,7,8,9;E:6,5,4,4,4;S:7,8,7,8,9;W:6,5,4,4,4', 'N:Q5.AQ3.4.QJ98753 762.T96.AQ76.AK6 AJ943.J2.KJ982.4 KT8.K8754.T53.T2 ♣,♦,♥,♠,NT;N:9,8,6,9,7;E:4,5,6,4,5;S:9,8,6,9,7;W:4,5,6,4,5', 'N:A97.AJ83.A.KJ874 K83.Q95.KQ72.Q93 6542.74.98643.A2 QJT.KT62.JT5.T65 ♣,♦,♥,♠,NT;N:8,7,8,9,7;E:5,6,5,4,6;S:8,7,8,9,7;W:5,6,5,4,6', 'N:85.K92.AT43.9873 K43.AJT4.J65.QT4 JT972.5.KQ9.AJ65 AQ6.Q8763.872.K2 ♣,♦,♥,♠,NT;N:8,7,4,7,5;E:5,6,9,6,8;S:8,7,4,7,5;W:5,6,9,6,8', 'N:K63.T752.T852.72 QJ5.Q9.QJ764.AT8 742.KJ643.9.J963 AT98.A8.AK3.KQ54 ♣,♦,♥,♠,NT;N:2,1,6,1,1;E:11,12,6,11,12;S:2,1,6,1,1;W:10,11,6,11,10', 'N:AK62.K62.QT3.KQ7 J9.A.AK76542.T42 QT8543.JT5.J98.5 7.Q98743..AJ9863 ♣,♦,♥,♠,NT;N:2,5,5,6,7;E:10,8,8,4,4;S:2,5,5,6,9;W:10,8,8,4,4', 'N:Q65.KT973.98.AT9 AJ92.A82.42.8432 87.654.QJT75.KQ7 KT43.QJ.AK63.J65 ♣,♦,♥,♠,NT;N:4,6,6,3,5;E:9,7,7,10,8;S:4,6,6,3,5;W:9,7,7,10,8', 'N:92.T654.865.9653 K863.Q.KJ93.KQ84 QJ.AK9873.T7.T72 AT754.J2.AQ42.AJ ♣,♦,♥,♠,NT;N:0,0,5,0,0;E:10,12,7,12,7;S:0,0,5,0,0;W:10,12,7,12,7', 'N:7.T.AQ764.A98642 AK84.AJ9742.KJ2. Q9632.K53..KQJ73 JT5.Q86.T9853.T5 ♣,♦,♥,♠,NT;N:11,6,3,6,8;E:2,7,10,7,5;S:11,6,3,6,8;W:2,7,9,7,5', 'N:865.7.K987.KT832 .Q985432.T643.J5 AKQJT32.JT.J.Q76 974.AK6.AQ52.A94 ♣,♦,♥,♠,NT;N:8,3,3,10,4;E:4,9,10,3,6;S:8,3,3,10,4;W:4,9,10,3,6', 'N:A8654.JT8.AJ.T52 QT972.AQ53.3.A97 .K9742.QT876.QJ6 KJ3.6.K9542.K843 ♣,♦,♥,♠,NT;N:4,6,8,4,6;E:9,6,5,9,7;S:4,6,8,4,6;W:8,6,5,8,7', 'N:KJ954.T42.K9.QJ7 7.AKJ763.AJT4.K4 3.Q985.Q8632.A62 AQT862..75.T9853 ♣,♦,♥,♠,NT;N:5,6,6,5,7;E:8,7,7,8,6;S:5,6,6,5,7;W:7,7,7,8,6', 'N:T2.654.76.QJT987 Q753.AK982.J5.65 K6.JT7.AQT83.AK2 AJ984.Q3.K942.43 ♣,♦,♥,♠,NT;N:7,6,2,1,3;E:5,7,10,10,6;S:7,6,2,1,3;W:5,7,10,10,6', 'N:9763.763.K93.A74 J84.QT.875.KQ952 T52.J542.AJT2.86 AKQ.AK98.Q64.JT3 ♣,♦,♥,♠,NT;N:3,5,4,5,4;E:9,7,8,8,8;S:3,5,4,5,4;W:9,7,9,8,9', 'N:T4.AQJ952.Q962.K KJ82.T7.87.87542 Q76.K863.43.QT63 A953.4.AKJT5.AJ9 ♣,♦,♥,♠,NT;N:4,3,8,2,6;E:9,9,5,10,7;S:4,3,8,2,6;W:9,9,5,10,7', 'N:642.AQJ92.A9.AT9 KQJ875.87.74.432 A9.K6.JT632.KJ85 T3.T543.KQ85.Q76 ♣,♦,♥,♠,NT;N:12,11,12,7,11;E:1,2,1,6,1;S:12,11,12,7,11;W:1,2,1,6,1', 'N:T73.QJ2.754.QT86 AK8654.964.AQ3.5 Q9.AK83.KJ8.AK32 J2.T75.T962.J974 ♣,♦,♥,♠,NT;N:9,7,9,7,9;E:3,4,3,6,3;S:9,7,9,7,9;W:3,4,3,6,3', 'N:JT432.KQ754.QJ3. K87.AJT2.84.Q982 AQ5.6.A72.KJT764 96.983.KT965.A53 ♣,♦,♥,♠,NT;N:8,7,8,10,7;E:5,6,5,3,6;S:8,7,8,10,7;W:5,6,5,3,5', 'N:AT5.A.AKJ6432.K4 42.K85.QT95.AQ87 3.Q7632.87.JT962 KQJ9876.JT94..53 ♣,♦,♥,♠,NT;N:8,10,7,3,6;E:5,3,6,10,7;S:8,9,7,3,6;W:5,3,6,10,7', 'N:86532.KJ5.A5.862 K4.84.KT63.AKT43 AQ97.A7632.Q8.97 JT.QT9.J9742.QJ5 ♣,♦,♥,♠,NT;N:5,5,11,11,8;E:8,8,2,2,2;S:5,5,11,11,8;W:8,8,2,2,2', 'N:AT87.964.53.9874 52.AQ752.A72.652 KQJ93.J8.K64.KT3 64.KT3.QJT98.AQJ ♣,♦,♥,♠,NT;N:5,3,3,7,4;E:7,10,10,6,8;S:5,3,3,7,4;W:7,10,10,6,8', 'N:A84.J642.64.KT53 KQ92.AKT9.QJ8.J2 T65.873.AK52.Q74 J73.Q5.T973.A986 ♣,♦,♥,♠,NT;N:6,4,5,4,5;E:7,9,8,8,8;S:6,4,5,4,5;W:7,9,8,8,8', 'N:JT5.A76.52.KJT43 Q873.943.JT976.Q 964.J852.KQ4.987 AK2.KQT.A83.A652 ♣,♦,♥,♠,NT;N:6,2,4,2,4;E:7,11,8,10,8;S:6,2,4,2,4;W:7,11,8,10,8', 'N:JT4.543.J962.T54 732.AT9.T83.KJ83 AKQ986.QJ6.A5.Q9 5.K872.KQ74.A762 ♣,♦,♥,♠,NT;N:3,4,3,8,6;E:10,9,9,5,6;S:3,4,4,8,6;W:10,9,9,5,6', 'N:AQT5.KJ852.9.863 J743.AT976.KT5.K 82..AQ763.AQJ742 K96.Q43.J842.T95 ♣,♦,♥,♠,NT;N:13,11,8,9,10;E:0,2,5,4,2;S:13,11,8,9,10;W:0,2,5,4,2', 'N:KJ6.T53.K85.K732 A3.AKQJ92.AQ.JT9 QT97.76.T9743.84 8542.84.J62.AQ65 ♣,♦,♥,♠,NT;N:1,6,1,4,1;E:10,7,11,8,10;S:1,6,1,4,1;W:10,7,11,8,10', 'N:AT8542.KQ9.AKJ.2 K973.873.Q86.J75 Q6.J54.32.AKT864 J.AT62.T9754.Q93 ♣,♦,♥,♠,NT;N:10,8,9,11,9;E:3,5,4,2,3;S:10,8,9,11,9;W:3,5,4,2,3', 'N:52.AKQ74.A853.A8 8.JT832.J7.Q9432 AKQJ9763.95.KQT. T4.6.9642.KJT765 ♣,♦,♥,♠,NT;N:5,13,11,13,13;E:8,0,2,0,0;S:5,13,11,13,13;W:8,0,2,0,0', 'N:AT95.A975.95.T97 Q86.K42.QT843.QJ J2.QJT8.AJ762.42 K743.63.K.AK8653 ♣,♦,♥,♠,NT;N:3,6,8,5,5;E:9,6,5,8,8;S:3,6,8,5,5;W:9,6,5,8,8', 'N:K97.985.T83.A863 Q84.KT73.KQ42.T5 J2.Q2.AJ975.QJ42 AT653.AJ64.6.K97 ♣,♦,♥,♠,NT;N:8,7,4,4,4;E:5,6,9,9,7;S:7,7,4,4,4;W:5,6,9,9,7', 'N:KJ7652.A32.8.AK3 AQ8.T94.AJ95.T54 9.J875.KT42.J962 T43.KQ6.Q763.Q87 ♣,♦,♥,♠,NT;N:7,5,6,7,5;E:6,6,5,6,8;S:7,5,6,7,5;W:6,6,5,6,8', 'N:AJT93.764.42.KQ7 Q5.KQ982.AQ76.98 87.JT53.KT5.JT63 K642.A.J983.A542 ♣,♦,♥,♠,NT;N:6,3,4,6,5;E:7,10,9,7,8;S:6,3,4,6,5;W:7,10,9,7,8', 'N:J8.A86.75.AQJ642 AK93.QJ52.AK.K97 T762.KT74.T93.T3 Q54.93.QJ8642.85 ♣,♦,♥,♠,NT;N:7,3,6,4,4;E:6,10,7,8,9;S:7,3,6,4,3;W:6,10,7,8,9']
deal count: 50 time: 0:00:07.907285
```

## Parallelize with Ray

Let's now proceed to parallelization.

We need to install `ray-on-golem`. It will install `ray` as a dependency.

```bash
# Install ray-on-golem & ray (recommended in a clean virtual environment)
pip3 install -U ray-on-golem
```

{% partial file="ray/installation-alert.md" /%}

### Ray initialization

We will now modify the original `ddy.py` to make it use Ray.

Ray needs to be imported and initialized. Add the following before `get_deal()` definition:

```python
import ray

# Use the default ray cluster or start a local one
ray.init()
```

Empty `ray.init()` arguments tell ray to look for an existing cluster (we will use this path later) or start a local instance for the time of app execution.

Run the code, and notice information about a local Ray instance starting.

```bash
python3 dds.py
```

```
2023-08-29 14:45:30,359	INFO worker.py:1612 -- Started a local Ray instance. View the dashboard at 127.0.0.1:8265
['N:AK87.542.T75.632 Q92.987.K84.KT74 J64.AQJ63.QJ.AJ5 T53.KT.A9632.Q98 ♣,♦,♥,♠,NT;N:6,5,8,7,7;E:7,8,5,6,5;S:6,5,7,7,7;W:7,8,5,6,5', 'N:AK853.K65.QJ2.K9 Q742.Q.A854.8654 .A8432.976.AQJ73 JT96.JT97.KT3.T2 ♣,♦,♥,♠,NT;N:10,9,9,8,10;E:3,4,3,4,3;S:10,9,9,8,10;W:3,4,3,4,3', 'N:52.Q95.QJT3.AQT4 K7.KT83.642.J532 T63.J62.K875.K97 AQJ984.A74.A9.86 ♣,♦,♥,♠,NT;N:6,8,3,3,4;E:7,5,9,9,9;S:6,8,3,3,4;W:7,5,9,9,9', 'N:AKT.63.T653.A953 Q862.J952.K94.Q8 J97.AKT87.J72.K2 543.Q4.AQ8.JT764 ♣,♦,♥,♠,NT;N:7,9,8,8,8;E:6,4,5,4,5;S:7,9,8,8,8;W:6,4,5,4,5', 'N:63.3.KJT85.KT983 AQ4.QT62.A3.A642 KJT.K9854.962.Q7 98752.AJ7.Q74.J5 ♣,♦,♥,♠,NT;N:8,7,6,4,6;E:5,4,7,8,6;S:8,7,6,4,6;W:5,5,7,8,6', 'N:AT6.A82.AKQJ2.K6 J53.Q94.753.QT83 K9742.KT.T4.AJ42 Q8.J7653.986.975 ♣,♦,♥,♠,NT;N:12,13,11,12,13;E:1,0,2,1,0;S:12,13,11,12,13;W:1,0,2,1,0', 'N:JT42.AQ9.754.KQ7 K8.J64.AJ92.J852 975.KT52.K83.AT4 AQ63.873.QT6.963 ♣,♦,♥,♠,NT;N:8,6,8,8,8;E:5,6,5,5,5;S:8,6,8,8,8;W:5,6,5,5,5', 'N:.JT874.T432.QT42 J843.AK52.76.J83 AKQ9..KJ95.K9765 T7652.Q963.AQ8.A ♣,♦,♥,♠,NT;N:9,9,4,5,7;E:3,3,8,8,6;S:10,9,5,5,7;W:3,3,8,8,6', 'N:QT93.T86.Q43.Q42 AJ4.J972.A8.9863 K652.Q53.K972.JT 87.AK4.JT65.AK75 ♣,♦,♥,♠,NT;N:3,5,4,6,5;E:10,8,9,7,8;S:3,5,4,6,5;W:10,7,9,6,8', 'N:K52.AT6.AK54.QJ5 T873.Q98.83.K742 Q6.KJ742.QJ2.T96 AJ94.53.T976.A83 ♣,♦,♥,♠,NT;N:8,10,10,6,10;E:5,3,3,6,3;S:8,10,10,6,10;W:5,3,3,6,3', 'N:AJ764.K85.42.J32 Q83.AJ2.873.AT85 2.T9743.AJT965.Q KT95.Q6.KQ.K9764 ♣,♦,♥,♠,NT;N:2,9,8,3,2;E:10,4,4,9,8;S:2,9,8,3,2;W:10,4,4,9,8', 'N:QJ.JT93.K84.Q952 T.862.JT63.AJT76 A7642.754.AQ2.84 K9853.AKQ.975.K3 ♣,♦,♥,♠,NT;N:4,4,5,5,5;E:9,9,8,8,8;S:4,4,5,5,5;W:9,9,8,8,8', 'N:A.AKQ9843.92.K98 32.JT6.A73.AQ643 KQJ864..KJT65.T5 T975.752.Q84.J72 ♣,♦,♥,♠,NT;N:7,10,9,11,9;E:5,2,2,2,2;S:7,9,9,10,9;W:5,2,2,2,2', 'N:AJT9.A953.KQJ3.2 Q4.JT74.T9.KJ653 K8763.K62.7.AQ74 52.Q8.A86542.T98 ♣,♦,♥,♠,NT;N:8,9,10,12,11;E:5,4,3,1,2;S:8,9,10,12,11;W:5,4,3,1,2', 'N:7643.KQ53.J832.A KJ2.A92.AK.QJT53 AQT5.T84.97.9864 98.J76.QT654.K72 ♣,♦,♥,♠,NT;N:5,5,8,8,5;E:7,7,5,5,7;S:5,5,8,8,5;W:7,7,5,5,7', 'N:Q.A8654.QJ532.63 AK86532.2.A76.94 J74.KJ.KT94.KQJ5 T9.QT973.8.AT872 ♣,♦,♥,♠,NT;N:5,9,7,3,5;E:7,4,6,9,6;S:5,9,7,3,5;W:7,4,6,9,6', 'N:654.J852.A93.863 KQJ3.AKQ.642.AKJ A92.T973.QJT.974 T87.64.K875.QT52 ♣,♦,♥,♠,NT;N:4,4,5,4,4;E:9,9,8,9,9;S:4,4,5,4,4;W:9,9,8,9,9', 'N:KJ7.Q97.J975.752 QT52.AJ8.AKQ.K64 A984.T42.64.AQJ9 63.K653.T832.T83 ♣,♦,♥,♠,NT;N:7,6,5,6,6;E:6,7,8,7,7;S:6,5,5,6,5;W:6,7,7,6,6', 'N:AT75.Q65432.73.7 K.K7.JT652.A9432 QJ9863.9.AK84.T5 42.AJT8.Q9.KQJ86 ♣,♦,♥,♠,NT;N:2,5,7,10,5;E:10,7,5,2,5;S:2,5,7,10,5;W:10,7,5,2,5', 'N:AKQJ7.KT42.T8.76 .953.AKQ732.KT93 T86542.Q6.J94.A8 93.AJ87.65.QJ542 ♣,♦,♥,♠,NT;N:1,2,4,9,6;E:11,11,8,3,6;S:1,2,4,9,6;W:11,11,8,3,6', 'N:KJ9865.832.K73.A 4.AQ5.986.QJT652 T.J94.QJ42.K9843 AQ732.KT76.AT5.7 ♣,♦,♥,♠,NT;N:4,6,5,7,5;E:8,7,8,6,7;S:4,6,5,7,5;W:8,7,8,6,7', 'N:QJ64.K5.85.AKT83 K75.83.AQ6.QJ942 A82.AQ642.JT9.76 T93.JT97.K7432.5 ♣,♦,♥,♠,NT;N:8,6,8,8,7;E:5,6,5,5,6;S:8,6,8,8,7;W:5,6,5,5,6', 'N:KJT86.K9.AJ8.K53 A7.QJ65.Q6.QT842 Q9543.73.743.976 2.AT842.KT952.AJ ♣,♦,♥,♠,NT;N:3,3,2,7,6;E:10,10,10,5,6;S:3,3,2,7,6;W:10,10,11,5,6', 'N:A95.82.65.J98542 Q43.AQ75.QT82.AQ J2.J643.AK43.T63 KT876.KT9.J97.K7 ♣,♦,♥,♠,NT;N:7,4,3,4,3;E:5,9,9,9,10;S:7,4,3,4,3;W:5,9,9,9,10', 'N:643.KQT94.742.43 K9.A65.KJ85.AKQ8 JT752.J2.T96.J72 AQ8.873.AQ3.T965 ♣,♦,♥,♠,NT;N:1,1,4,3,1;E:12,12,9,10,12;S:1,1,4,3,1;W:12,12,9,10,12', 'N:AJ75.Q932.T95.42 98642.AT4.AQ84.A KT.KJ7.K632.QJT3 Q3.865.J7.K98765 ♣,♦,♥,♠,NT;N:6,7,7,6,7;E:6,6,5,7,6;S:6,7,7,6,7;W:6,6,5,7,6', 'N:AQT93.9.K3.97632 52.875.Q9642.AK4 KJ.KQJT2.AJT.Q85 8764.A643.875.JT ♣,♦,♥,♠,NT;N:10,7,9,9,10;E:3,5,4,2,3;S:10,7,9,9,10;W:3,5,4,2,3', 'N:986.J93.A852.J95 JT4.87.KQ643.QT7 KQ7.KQ42.9.AK832 A532.AT65.JT7.64 ♣,♦,♥,♠,NT;N:10,6,9,7,8;E:3,7,4,6,4;S:10,6,9,7,8;W:2,7,4,5,4', 'N:54.QT76.4.AKT974 A98.A852.JT753.8 3.K943.AQ982.Q52 KQJT762.J.K6.J63 ♣,♦,♥,♠,NT;N:9,7,10,3,5;E:2,6,3,10,6;S:9,7,10,3,5;W:2,6,3,10,6', 'N:8.A654.QT94.KJ53 KT52.J9.AK83.AT9 AQJ973.KQ73.J.Q8 64.T82.7652.7642 ♣,♦,♥,♠,NT;N:9,9,11,10,10;E:4,4,2,3,3;S:9,9,11,10,10;W:4,4,2,3,3', 'N:AT6.AQ982.KJ2.AK KJ98.KT5.754.T76 52.J76.QT98.J832 Q743.43.A63.Q954 ♣,♦,♥,♠,NT;N:7,10,10,6,8;E:5,3,3,6,5;S:7,10,10,6,8;W:5,3,3,6,5', 'N:QJ762.98764.K.97 K3.KQT3.865.KQ84 984.A52.Q732.AJ6 AT5.J.AJT94.T532 ♣,♦,♥,♠,NT;N:4,3,6,7,4;E:8,10,6,6,9;S:4,3,6,7,4;W:8,10,6,6,8', 'N:AQT82.J98.Q75.54 K5.AT54.AT.KT873 J73.KQ3.J842.AQ6 964.762.K963.J92 ♣,♦,♥,♠,NT;N:5,8,6,9,6;E:8,5,7,4,5;S:5,7,6,9,6;W:8,5,7,4,5', 'N:J654.KQ4.3.87654 72.A975.AT842.Q9 A93.JT8632.Q7.A3 KQT8..KJ965.KJT2 ♣,♦,♥,♠,NT;N:5,2,7,4,4;E:8,11,5,7,6;S:5,2,8,5,4;W:8,11,5,7,6', 'N:9842.KT82.K72.95 A753.J73.Q8.AJ43 KJT.A95.T953.QT8 Q6.Q64.AJ64.K762 ♣,♦,♥,♠,NT;N:5,5,6,6,5;E:8,8,7,7,7;S:5,5,6,6,5;W:8,7,7,7,7', 'N:AKQ5.85.AQT8.K93 J632.AKJT4.2.A84 T7.Q96.K965.QT62 984.732.J743.J75 ♣,♦,♥,♠,NT;N:10,10,7,9,9;E:3,3,5,4,3;S:10,10,7,9,9;W:3,3,5,4,3', 'N:42.K.KQT732.9764 QT865.QT532.A6.2 K9.AJ8.9854.KQ83 AJ73.9764.J.AJT5 ♣,♦,♥,♠,NT;N:7,7,3,3,5;E:6,5,10,10,7;S:7,8,3,3,6;W:6,5,10,10,7', 'N:QJ42.8653.K762.T 76.Q942.AQ853.Q4 K9.AK7.94.AJ8765 AT853.JT.JT.K932 ♣,♦,♥,♠,NT;N:6,5,6,6,6;E:6,8,7,7,7;S:6,5,6,6,6;W:6,8,7,7,7', 'N:T873.KJ85.AK5.AJ KQJ92.T.9743.742 A654.A96.Q86.K93 .Q7432.JT2.QT865 ♣,♦,♥,♠,NT;N:10,9,10,9,11;E:3,3,3,4,2;S:10,10,10,9,11;W:3,3,3,4,2', 'N:J75.J642.AJ73.A2 Q984.AK753.6.KJT T632.T9.T4.Q9654 AK.Q8.KQ9852.873 ♣,♦,♥,♠,NT;N:5,3,2,4,3;E:8,10,10,9,10;S:5,3,2,4,3;W:8,10,10,9,10', 'N:7.T3.AKT42.AKJ95 AJ632..Q65.76432 K985.AJ8764.J3.8 QT4.KQ952.987.QT ♣,♦,♥,♠,NT;N:10,11,10,8,9;E:3,2,3,5,3;S:10,11,10,8,9;W:3,2,3,5,3', 'N:J85.42.JT65.Q865 K.AQT75.AQ97.AJ2 AT7643.63.K32.K4 Q92.KJ98.84.T973 ♣,♦,♥,♠,NT;N:4,4,3,7,4;E:9,9,10,6,9;S:4,4,3,7,4;W:9,9,10,6,9', 'N:AT.T87.KJ97.JT63 KQ852.AK5.T8.975 J7643.94.Q42.A42 9.QJ632.A653.KQ8 ♣,♦,♥,♠,NT;N:6,5,3,4,4;E:7,7,10,9,8;S:6,5,3,4,4;W:7,7,10,9,8', 'N:AT9.Q2.QT97.QJ97 Q85.KT954.AKJ5.5 K76432.6.4.A8632 J.AJ873.8632.KT4 ♣,♦,♥,♠,NT;N:9,3,2,10,4;E:3,10,11,3,6;S:9,3,2,10,4;W:3,10,11,3,6', 'N:J872.T7.A5.J7542 Q53.AK62.J9876.Q AKT4.Q9543.K3.K6 96.J8.QT42.AT983 ♣,♦,♥,♠,NT;N:7,4,8,9,7;E:6,9,5,4,6;S:7,4,8,9,7;W:5,9,4,4,5', 'N:J953.T743.KT4.83 QT64.J9.J32.AQT2 K872.A2.A876.654 A.KQ865.Q95.KJ97 ♣,♦,♥,♠,NT;N:3,6,4,7,4;E:10,7,9,6,9;S:3,6,4,7,4;W:10,7,9,6,9', 'N:2.7542.A8652.Q87 AQJT9.T86.K7.KT3 8543.A3.JT94.AJ4 K76.KQJ9.Q3.9652 ♣,♦,♥,♠,NT;N:6,9,4,4,4;E:7,3,7,9,6;S:5,9,4,4,4;W:7,3,7,9,6', 'N:KQ763.83.KQJ.QT6 4.6.T62.KJ875432 T2.KQT754.875.A9 AJ985.AJ92.A943. ♣,♦,♥,♠,NT;N:4,4,7,6,7;E:9,8,5,6,6;S:4,4,7,6,7;W:9,8,5,7,6', 'N:A.J873.76542.AK7 KQ8642.6.Q93.963 J7.AKQ542.T.QJT4 T953.T9.AKJ8.852 ♣,♦,♥,♠,NT;N:11,6,12,5,9;E:1,6,1,7,2;S:11,6,12,5,9;W:1,6,1,7,2', 'N:9863.9532.876.T3 QJ75.KJ8.QT.AJ72 AK4.AQ64.K52.854 T2.T7.AJ943.KQ96 ♣,♦,♥,♠,NT;N:3,3,5,4,3;E:10,10,7,8,10;S:3,3,5,4,3;W:9,9,7,8,9']
deal count: 50 time: 0:00:08.060884
```

### @ray.remote decorator

We call the `get_deal()` method a lot, it uses the CPU intensively and doesn't need any external communication - it is a great candidate for parallelization.

Let's decorate it with `@ray.remote`:

```python
@ray.remote
def get_deal():
```

The decorator tells Ray that this piece of code can be scheduled to run on a remote node.

Please note, that if the remote task is too small, the scheduling overhead might be too big for the parallelization to be beneficial. Consider grouping smaller tasks into chunks that need more CPU time.

### Remote call and waiting for results with ray.get()

We need to explicitly acknowledge the remoteness of the call by adding `.remote()` inside the `get_lots_of_deals()` function.
Additionally, now we aren't getting the results right away. `get_deal.remote()` merely schedules the execution and returns a future - an id - needed to get the results later with `ray.get()`:

```python
def get_lots_of_deals():

    result_ids = [get_deal.remote() for i in range(DEAL_COUNT)]

    results = ray.get(result_ids)

    return results
```

And that's it!
Run the code now - the output should look the same, but the whole thing should take a little less time.

The time difference is the result of Ray using more cores of your local CPU (vs. using only one core by the original app).

```bash
python3 dds.py
```

```
2023-08-29 15:00:40,130	INFO worker.py:1612 -- Started a local Ray instance. View the dashboard at 127.0.0.1:8265
['N:93.T7543.A964.K5 AT872.Q98.52.T84 Q54.AJ.873.AQ932 KJ6.K62.KQJT.J76 ♣,♦,♥,♠,NT;N:7,7,7,5,7;E:6,5,5,8,6;S:7,7,7,5,7;W:6,5,5,8,6', 'N:J7.T53.K542.JT72 Q4.QJ62.T976.954 AKT98632.7.8.AQ3 5.AK984.AQJ3.K86 ♣,♦,♥,♠,NT;N:7,4,4,10,7;E:5,9,9,3,4;S:7,4,4,10,7;W:5,9,9,3,4', 'N:JT72.KT5.74.JT62 4.AQ8732.J32.K53 AKQ863.64.KQT.94 95.J9.A9865.AQ87 ♣,♦,♥,♠,NT;N:4,3,3,8,3;E:9,10,10,5,7;S:4,3,3,8,3;W:9,10,10,5,7', 'N:53.AKQ3.752.T943 J42.J54.AKQJT8.K KQ7.72.963.A8652 AT986.T986.4.QJ7 ♣,♦,♥,♠,NT;N:7,4,5,4,5;E:5,8,7,8,8;S:7,4,5,4,5;W:5,8,7,8,8', 'N:Q7643.J653.KJ.54 K5.AKQ8.76542.Q3 J982.72.QT3.T872 AT.T94.A98.AKJ96 ♣,♦,♥,♠,NT;N:1,2,1,6,1;E:12,11,12,7,12;S:1,2,1,6,1;W:12,11,12,7,12', 'N:AJ2..K87643.9873 T97.AKQ5.AQT.QJ2 K863.98642.95.54 Q54.JT73.J2.AKT6 ♣,♦,♥,♠,NT;N:2,6,3,4,2;E:9,7,9,8,9;S:2,6,3,4,2;W:10,7,9,8,10', 'N:JT9.QJ43.754.K87 2.T9875.Q2.JT432 63.AK62.AKT983.6 AKQ8754..J6.AQ95 ♣,♦,♥,♠,NT;N:1,8,8,3,5;E:10,3,5,10,3;S:1,9,8,3,5;W:10,3,5,10,3', 'N:AK97.AQT76.K.T53 T52.932.J76.AQJ6 863.KJ8.AQ942.K2 QJ4.54.T853.9874 ♣,♦,♥,♠,NT;N:9,11,12,11,11;E:4,2,1,2,2;S:9,11,12,11,11;W:4,2,1,2,2', 'N:AKQJ.Q54.975.932 95.AK82.JT3.AT84 72.J963.AK62.Q75 T8643.T7.Q84.KJ6 ♣,♦,♥,♠,NT;N:6,6,6,6,6;E:7,6,6,7,6;S:6,6,6,6,6;W:7,6,6,7,6', 'N:T874.AKT2.K763.2 A65.Q7.AJ5.J7643 Q3.9854.Q9.AK985 KJ92.J63.T842.QT ♣,♦,♥,♠,NT;N:7,6,9,6,6;E:6,6,4,6,6;S:7,6,9,6,6;W:6,6,4,6,6', 'N:AQJT73.J2.AK9.32 8.Q753.QT7652.A6 K62.6.J843.KJT84 954.AKT984..Q975 ♣,♦,♥,♠,NT;N:7,6,1,8,6;E:5,7,12,4,5;S:7,6,1,9,6;W:4,7,11,4,5', 'N:K9865.A2.9863.A7 JT2.QJ74.KT4.Q83 Q74.KT95.AJ5.954 A3.863.Q72.KJT62 ♣,♦,♥,♠,NT;N:6,8,7,9,7;E:7,4,6,4,5;S:6,8,6,9,7;W:7,4,6,4,5', 'N:5.K9643.QT72.AJT AKQ64.JT8.KJ6.K2 T873.75.A853.Q94 J92.AQ2.94.87653 ♣,♦,♥,♠,NT;N:4,8,6,3,5;E:8,5,6,9,8;S:4,8,6,3,5;W:8,5,6,10,8', 'N:764.AK95432.A.64 KJ82..KJ9852.J73 AT93.JT86.T63.Q8 Q5.Q7.Q74.AKT952 ♣,♦,♥,♠,NT;N:2,2,9,7,7;E:10,11,4,6,4;S:2,2,9,7,7;W:10,11,4,6,4', 'N:K4.J952.7.AQJ754 T6.874.AK9.KT932 87.AKT3.QT532.86 AQJ9532.Q6.J864. ♣,♦,♥,♠,NT;N:9,7,9,4,6;E:4,6,4,9,6;S:9,7,9,4,6;W:4,6,4,9,6', 'N:AK4.J8.K76.K5432 T532.KT6.T93.AQ8 Q8.Q7542.AJ542.7 J976.A93.Q8.JT96 ♣,♦,♥,♠,NT;N:7,10,9,6,8;E:6,2,3,6,5;S:7,10,9,6,8;W:6,2,3,6,5', 'N:J842.QJ8752.J7.3 K75.T6.K643.Q984 A6.K43.QT85.J652 QT93.A9.A92.AKT7 ♣,♦,♥,♠,NT;N:4,4,8,4,4;E:9,9,5,9,7;S:4,4,8,4,4;W:9,9,5,9,7', 'N:AT842.63.T863.53 J953.AJ7.54.Q962 6.KT94.AQJ2.T874 KQ7.Q852.K97.AKJ ♣,♦,♥,♠,NT;N:4,7,4,5,4;E:9,6,8,8,9;S:4,7,4,5,4;W:9,5,8,8,9', 'N:843.QT84.J62.K83 T2.76.T943.76542 KQJ9.AJ32.K85.AJ A765.K95.AQ7.QT9 ♣,♦,♥,♠,NT;N:5,6,9,8,8;E:7,5,4,4,4;S:6,7,9,9,9;W:7,6,4,4,4', 'N:843.AJ84.K87.J52 K9.Q.QJ96432.K63 A762.T53.5.A9874 QJT5.K9762.AT.QT ♣,♦,♥,♠,NT;N:7,4,6,6,6;E:6,9,6,6,6;S:7,4,6,6,6;W:6,9,7,6,6', 'N:AT964.J72.J94.A3 52.AK43.T8532.QJ KQJ.T8.KQ.T97642 873.Q965.A76.K85 ♣,♦,♥,♠,NT;N:8,5,5,9,6;E:5,8,8,4,5;S:8,5,5,9,6;W:5,8,8,4,5', 'N:65.754.64.KT8742 832.AT9.QJT8.653 AT.KQJ8632.53.QJ KQJ974..AK972.A9 ♣,♦,♥,♠,NT;N:7,1,8,1,1;E:6,12,5,12,7;S:7,1,8,1,1;W:6,12,5,12,7', 'N:K65.QT76.932.954 AJ832.5.J5.AQ862 T94.AKJ43.KQ.KT7 Q7.982.AT8764.J3 ♣,♦,♥,♠,NT;N:3,3,7,4,6;E:9,9,5,9,7;S:3,3,7,4,6;W:9,9,5,9,7', 'N:9876.Q3.Q95.AJ92 A3.AT854.AT2.KT7 KQT.K97.73.Q8653 J542.J62.KJ864.4 ♣,♦,♥,♠,NT;N:7,4,4,6,5;E:5,9,9,7,8;S:7,4,3,6,4;W:5,9,9,7,8', 'N:KQT876.876.KJ.65 A.KJ953.A53.KT83 43.AT.62.AQJ9742 J952.Q42.QT9874. ♣,♦,♥,♠,NT;N:8,2,3,7,7;E:4,11,10,5,4;S:8,2,3,7,7;W:4,11,9,5,3', 'N:AJ92.T86..AKT875 K8.95.AQT9643.J2 Q743.AKQ73.J5.94 T65.J42.K872.Q63 ♣,♦,♥,♠,NT;N:11,5,12,12,6;E:2,8,1,1,5;S:11,5,12,12,6;W:2,8,1,1,5', 'N:K8753.742.J76.A5 Q62.AJ3.42.QT974 J4.Q985.AKT53.J2 AT9.KT6.Q98.K863 ♣,♦,♥,♠,NT;N:4,7,6,6,4;E:8,6,7,7,8;S:4,7,6,6,4;W:8,6,7,7,8', 'N:J.KJ9752.873.T94 AK743.Q3.AJ64.K6 98652.A84.T.Q875 QT.T6.KQ952.AJ32 ♣,♦,♥,♠,NT;N:1,0,7,2,0;E:10,11,6,10,7;S:1,0,7,2,0;W:10,11,6,10,7', 'N:KT76.K543.3.AQT9 A9432.QJT9.A2.J5 QJ5.76.KJ987.862 8.A82.QT654.K743 ♣,♦,♥,♠,NT;N:7,6,5,7,7;E:6,7,8,5,6;S:7,6,5,7,7;W:6,7,8,6,6', 'N:T76543.KQ6.AKQ3. AJ.J752.42.KQ843 KQ9.T943.J6.AJ96 82.A8.T9875.T752 ♣,♦,♥,♠,NT;N:7,8,10,11,10;E:6,4,3,2,3;S:7,8,9,11,10;W:6,4,3,2,3', 'N:T9.865.T92.JT743 J874.Q97.Q84.A96 A65.AJ2.765.K852 KQ32.KT43.AKJ3.Q ♣,♦,♥,♠,NT;N:6,2,2,2,5;E:7,10,10,11,7;S:6,2,2,2,5;W:7,10,10,11,7', 'N:K9654.K9642..KQ9 87.AQJ3.J76.T873 AJ32.T.AQ943.J52 QT.875.KT852.A64 ♣,♦,♥,♠,NT;N:6,7,7,11,6;E:5,5,5,2,5;S:6,7,8,11,6;W:5,5,5,2,5', 'N:K4.K98532.QT842. AQJT52.AT6.7.A94 983.7.AJ95.KQ732 76.QJ4.K63.JT865 ♣,♦,♥,♠,NT;N:3,9,7,4,3;E:10,4,6,9,10;S:3,8,5,2,2;W:10,4,6,9,10', 'N:632.Q2.Q52.Q9654 Q9754.54.T83.872 AT8.AKJT9.A64.KT KJ.8763.KJ97.AJ3 ♣,♦,♥,♠,NT;N:10,9,10,7,11;E:2,4,3,5,2;S:10,9,10,7,11;W:2,4,3,5,2', 'N:64.AKJ54.J.KT874 A92.T.KT8643.A93 KQ853.Q2.Q9752.6 JT7.98763.A.QJ52 ♣,♦,♥,♠,NT;N:7,6,7,5,6;E:6,7,6,6,6;S:7,6,7,5,6;W:6,7,6,6,6', 'N:QT96.Q4.J2.KT832 A75.J73.AK54.A75 KJ3.AK952.6.Q964 842.T86.QT9873.J ♣,♦,♥,♠,NT;N:10,5,8,8,5;E:3,8,3,5,8;S:10,5,8,8,5;W:3,8,3,5,8', 'N:AJ53.KJT.J965.74 K7.Q9642.T8.AQ62 84.A8753.7.KT983 QT962..AKQ432.J5 ♣,♦,♥,♠,NT;N:7,3,8,5,6;E:6,9,5,8,7;S:7,3,8,4,6;W:6,10,5,8,7', 'N:AQJ76.Q94.JT8.63 53.K732.K9642.Q4 K42.J65.AQ3.AJ82 T98.AT8.75.KT975 ♣,♦,♥,♠,NT;N:7,7,7,10,9;E:6,6,6,3,3;S:7,7,7,10,9;W:6,6,6,3,3', 'N:A9652.K82.J9.975 3.J963.AT3.AQJT2 KQ7.A74.7642.K86 JT84.QT5.KQ85.43 ♣,♦,♥,♠,NT;N:4,5,5,8,6;E:9,8,8,5,6;S:4,5,5,8,6;W:9,8,8,5,6', 'N:K7.J63.AKQ84.Q32 AQ432.872.96.A96 J65.AQ954.752.KJ T98.KT.JT3.T8754 ♣,♦,♥,♠,NT;N:6,9,9,6,8;E:6,4,4,7,4;S:6,9,9,6,8;W:6,4,4,7,4', 'N:K7543.A96.43.AK6 QJ98.KJ3.AT95.72 A2.8742.KQJ2.983 T6.QT5.876.QJT54 ♣,♦,♥,♠,NT;N:8,8,9,8,8;E:5,5,4,4,5;S:8,8,9,8,8;W:5,5,4,4,5', 'N:964.KQT754.9.KQ9 AKJ8732.A9.75.A3 Q5.J63.KJ42.8765 T.82.AQT863.JT42 ♣,♦,♥,♠,NT;N:4,1,7,0,0;E:8,12,6,12,12;S:4,1,7,0,0;W:9,12,6,12,12', 'N:Q.QT984.K832.Q96 T983.A652.AJ5.74 AK4.J7.Q964.T853 J7652.K3.T7.AKJ2 ♣,♦,♥,♠,NT;N:6,6,6,4,5;E:7,6,6,9,7;S:6,6,6,4,5;W:7,6,6,9,7', 'N:J6.AT.7652.QT872 T974.QJ843.KJ9.4 K853.962.A83.963 AQ2.K75.QT4.AKJ5 ♣,♦,♥,♠,NT;N:5,4,3,3,3;E:8,9,10,9,10;S:5,4,3,3,3;W:8,9,10,10,10', 'N:9854.T63.AJT2.A9 KJ3.AKJ5.876.KJ4 A7.9872.KQ4.T763 QT62.Q4.953.Q852 ♣,♦,♥,♠,NT;N:5,7,6,5,6;E:7,6,7,7,7;S:5,7,6,5,6;W:7,6,7,7,7', 'N:A54.9843.J2.AQ74 T632.AJ5.83.T965 KJ8.KT.KT9754.K8 Q97.Q762.AQ6.J32 ♣,♦,♥,♠,NT;N:7,10,7,7,8;E:5,3,5,6,4;S:8,10,7,7,8;W:5,3,5,6,4', 'N:K873.KQ972.QJ97. T62.AT853.A5.J74 J.J.K832.AKQT986 AQ954.64.T64.532 ♣,♦,♥,♠,NT;N:10,10,6,6,8;E:3,3,5,6,3;S:10,10,6,6,8;W:3,3,5,7,3', 'N:532.A.J9875.7542 KJT4.J9743.3.Q98 A987.Q52.AQT2.A6 Q6.KT86.K64.KJT3 ♣,♦,♥,♠,NT;N:6,8,4,7,7;E:7,4,8,6,6;S:6,9,4,7,7;W:7,4,8,6,6', 'N:KT973.QT5.732.T6 J42.K84.KJ.KQ542 8.963.98654.AJ87 AQ65.AJ72.AQT.93 ♣,♦,♥,♠,NT;N:4,5,3,3,3;E:9,7,9,10,10;S:4,5,3,3,3;W:9,7,9,10,10', 'N:AK983.A6.AQJ.QT5 JT.KQ74.K52.AJ72 Q65.JT9852.93.93 742.3.T8764.K864 ♣,♦,♥,♠,NT;N:5,5,8,9,7;E:8,7,5,4,5;S:5,5,8,9,7;W:8,7,5,4,5']
deal count: 50 time: 0:00:04.643217
```

### Output cluster info

As the one last touch before proceeding to run our script on a Ray on Golem cluster, we'll add some information about the cluster to the output.
Add this after `ray.init()` and at the end of the code:

```python
print('''This cluster consists of
          {} nodes in total
          {} CPU resources in total
      '''.format(len(ray.nodes()), ray.cluster_resources()['CPU']))
```

Run it and see how many cores Ray finds on your machine:

```bash
python3 dds.py
```

```
2023-08-29 15:08:48,590	INFO worker.py:1612 -- Started a local Ray instance. View the dashboard at 127.0.0.1:8265
This cluster consists of
          1 nodes in total
          8.0 CPU resources in total

['N:AT5.8642.T3.J952 84.KQJ9.AQ4.KT43 QJ3.A.K98652.A76 K9762.T753.J7.Q8 ♣,♦,♥,♠,NT;N:7,9,5,6,6;E:5,4,7,7,5;S:7,9,5,6,6;W:5,4,7,6,5', 'N:AQJT6.97.Q96.752 82.AQ4.JT843.KT8 4.KT82.752.AQ963 K9753.J653.AK.J4 ♣,♦,♥,♠,NT;N:8,6,6,7,7;E:4,7,6,5,5;S:8,6,6,7,7;W:4,7,6,5,5', 'N:T852.KJ.J63.K853 Q97.AT9864.52.96 J3.Q53.Q74.AQJ42 AK64.72.AKT98.T7 ♣,♦,♥,♠,NT;N:7,4,4,4,6;E:5,9,9,9,6;S:7,4,4,4,6;W:5,9,9,9,6', 'N:AK982.J8.T82.KT2 Q75.K952.A7.Q986 J43.AT643.Q54.A4 T6.Q7.KJ963.J753 ♣,♦,♥,♠,NT;N:5,5,8,8,6;E:8,7,5,5,6;S:5,5,8,8,6;W:8,7,5,5,6', 'N:742.9.AKQJT84.97 .AKT.976.AKJT643 AQJ3.J7632.532.5 KT9865.Q854..Q82 ♣,♦,♥,♠,NT;N:0,9,4,5,2;E:13,4,8,8,5;S:0,8,4,4,2;W:13,4,8,8,5', 'N:A.AQ5.K42.KQ8652 QJ3.K972.9853.AT T92.83.QJT76.J74 K87654.JT64.A.93 ♣,♦,♥,♠,NT;N:9,10,3,3,6;E:2,2,9,9,6;S:9,10,3,3,6;W:2,2,9,9,6', 'N:T954.K73.T52.754 Q862.Q98.J63.Q96 K3.A6.AKQ94.AJT8 AJ7.JT542.87.K32 ♣,♦,♥,♠,NT;N:9,9,6,7,8;E:4,4,7,6,4;S:9,9,6,7,9;W:3,3,7,5,3', 'N:KQJ4.K43.Q8.AJT8 A9.JT9.K963.K752 6.A87652.T742.Q9 T87532.Q.AJ5.643 ♣,♦,♥,♠,NT;N:7,7,8,5,7;E:6,6,4,7,6;S:7,7,8,5,7;W:6,6,4,7,6', 'N:82.A942.A32.AKJ7 KQ654.T53.96.942 JT9.8.Q8754.Q653 A73.KQJ76.KJT.T8 ♣,♦,♥,♠,NT;N:9,9,4,5,6;E:4,4,8,7,7;S:9,9,4,5,6;W:4,4,8,7,7', 'N:J92.KQJ8653.97.9 T7.T92.AQJT643.K K653.A7.K85.T754 AQ84.4.2.AQJ8632 ♣,♦,♥,♠,NT;N:2,2,7,4,3;E:10,10,4,8,6;S:2,2,7,4,3;W:10,10,4,8,6', 'N:9863.JT4.432.AJ5 T5.AK6.K97.QT432 AKJ7.Q8732.Q5.K8 Q42.95.AJT86.976 ♣,♦,♥,♠,NT;N:4,4,8,8,5;E:9,8,5,5,7;S:4,4,8,8,5;W:9,8,5,5,7', 'N:T93.87.85.K98632 AKJ74.JT3.QT7.T4 .AK65.A9642.AQJ7 Q8652.Q942.KJ3.5 ♣,♦,♥,♠,NT;N:12,9,7,4,8;E:1,2,5,8,4;S:12,9,7,4,8;W:1,2,5,8,4', 'N:T84.K8.QJ75.K752 AJ9.J43.AKT9.A94 K62.T9765.32.T83 Q753.AQ2.864.QJ6 ♣,♦,♥,♠,NT;N:4,2,4,2,2;E:9,10,9,11,11;S:4,2,4,2,2;W:9,11,9,11,11', 'N:T2.8653.AT83.AT4 A75.974.J7542.93 QJ.AQJ2.KQ96.Q62 K98643.KT..KJ875 ♣,♦,♥,♠,NT;N:4,8,8,2,6;E:8,5,4,11,6;S:4,8,8,2,7;W:8,5,4,11,6', 'N:A9873.Q5.AKJ8.Q2 KQT64.A987.T2.64 2.KJT432.Q94.JT7 J5.6.7653.AK9853 ♣,♦,♥,♠,NT;N:6,8,9,5,7;E:7,5,4,7,3;S:6,8,9,5,7;W:7,5,4,7,3', 'N:J54.Q842.J9.AT42 K87.AKJ3.832.K63 Q96.65.AQ65.J987 AT32.T97.KT74.Q5 ♣,♦,♥,♠,NT;N:6,5,4,4,4;E:7,8,9,9,8;S:6,5,4,4,4;W:7,8,9,9,8', 'N:AQT65.J62.95.AQ9 J9842.K74.J73.J2 K3.Q53.QT86.8653 7.AT98.AK42.KT74 ♣,♦,♥,♠,NT;N:6,5,5,6,7;E:6,7,8,6,6;S:6,5,5,6,7;W:6,7,8,6,6', 'N:A72.AJ5.9752.AKT 963.QT9.JT86.943 K84.872.43.Q8752 QJT5.K643.AKQ.J6 ♣,♦,♥,♠,NT;N:8,5,6,6,8;E:5,7,7,7,5;S:8,5,5,6,8;W:5,7,7,7,5', 'N:642.KJT95.A63.T8 95.A87432.J72.42 7..KQT985.AKJ965 AKQJT83.Q6.4.Q73 ♣,♦,♥,♠,NT;N:11,12,5,4,5;E:2,1,7,8,5;S:11,12,5,4,5;W:2,1,7,8,5', 'N:AJ943.T85.2.9542 82.KQ32.AT6.KJT7 KT5.7.KQJ985.A86 Q76.AJ964.743.Q3 ♣,♦,♥,♠,NT;N:6,9,3,8,6;E:5,2,8,2,6;S:6,9,3,8,6;W:5,2,8,2,6', 'N:K2.KQJ.Q2.KJ9752 AQJ863.T65.K3.A8 75.843.J8754.QT6 T94.A972.AT96.43 ♣,♦,♥,♠,NT;N:7,5,3,2,2;E:6,8,10,11,10;S:7,5,3,2,2;W:6,8,10,11,10', 'N:3.T52.KJ753.K643 76.AJ98.QT82.AT8 KJT42.76.9.QJ752 AQ985.KQ43.A64.9 ♣,♦,♥,♠,NT;N:7,3,1,3,3;E:6,10,12,9,8;S:7,3,1,3,3;W:6,10,12,9,8', 'N:A652.KQ.K874.AK3 Q43.532.Q9652.Q7 9.AJ876.AJ3.T986 KJT87.T94.T.J542 ♣,♦,♥,♠,NT;N:11,11,12,8,11;E:1,2,1,4,1;S:11,11,12,8,11;W:1,2,1,4,1', 'N:KJ943.KT6..AKJ75 Q6.J972.KQJ942.9 T72.A854.T6.T863 A85.Q3.A8753.Q42 ♣,♦,♥,♠,NT;N:11,4,8,10,6;E:2,9,5,3,6;S:11,4,8,10,6;W:2,9,5,3,6', 'N:KJ65.Q87.T84.Q43 T97.JT9.AQ72.K75 A832.62.J93.AJ86 Q4.AK543.K65.T92 ♣,♦,♥,♠,NT;N:7,5,5,7,7;E:6,7,8,6,6;S:7,5,5,7,7;W:6,7,8,6,6', 'N:Q875.4.K965.QJ76 32.AK83.A74.KT82 AT64.QJT9.T832.5 KJ9.7652.QJ.A943 ♣,♦,♥,♠,NT;N:4,7,4,6,5;E:9,6,9,6,8;S:4,7,4,6,5;W:9,6,9,6,8', 'N:AQJT94.83.K75.T8 732.AT9.8.AQJ654 86.QJ4.AJT9632.3 K5.K7652.Q4.K972 ♣,♦,♥,♠,NT;N:4,10,4,10,5;E:9,0,9,0,0;S:4,10,4,10,5;W:9,0,9,0,0', 'N:Q864.J9..AQJ9732 AT95.KT53.A76.64 KJ.Q8762.T853.K5 732.A4.KQJ942.T8 ♣,♦,♥,♠,NT;N:10,4,5,6,4;E:3,9,6,7,6;S:10,4,5,6,4;W:3,9,7,7,6', 'N:J9.T5.A962.85432 AT843.962.J875.Q 62.AK73.Q43.KJ97 KQ75.QJ84.KT.AT6 ♣,♦,♥,♠,NT;N:8,5,4,3,4;E:5,7,8,9,8;S:8,6,4,3,4;W:5,7,8,9,8', 'N:42.J763.AQJ5.972 AKT7.AKQT.742.63 J53.984.K63.KQ85 Q986.52.T98.AJT4 ♣,♦,♥,♠,NT;N:4,5,4,2,4;E:8,8,9,9,9;S:4,5,4,2,4;W:8,8,9,9,9', 'N:AK4.J87.KT75.853 QT92.KQ64.AJ2.AQ 53.T952.Q864.642 J876.A3.93.KJT97 ♣,♦,♥,♠,NT;N:2,6,4,2,4;E:10,7,9,11,9;S:2,6,4,2,4;W:10,7,9,11,9', 'N:AT52.Q9652.QT2.6 984.J84.J64.KQ32 QJ763.AKT3.A.A95 K.7.K98753.JT874 ♣,♦,♥,♠,NT;N:6,6,13,13,12;E:7,7,0,0,1;S:6,6,13,13,12;W:7,7,0,0,1', 'N:T3.2.T754.AKJ876 K5.KQJ63.AQ8.532 J872.T94.KJ3.QT9 AQ964.A875.962.4 ♣,♦,♥,♠,NT;N:9,5,1,3,4;E:4,8,11,10,7;S:9,5,1,3,4;W:4,7,11,9,7', 'N:AJ74.743.52.K864 652.A9865.A74.53 T98.T2.KJT963.AQ KQ3.KQJ.Q8.JT972 ♣,♦,♥,♠,NT;N:6,8,5,8,5;E:7,5,8,5,7;S:6,8,5,8,6;W:7,4,8,5,7', 'N:AK2.A86.KQ6.9542 Q64.KQ942.JT7.AQ T85.JT75.A98.KT7 J973.3.5432.J863 ♣,♦,♥,♠,NT;N:8,8,8,8,8;E:5,5,5,5,5;S:8,8,8,7,8;W:5,5,5,5,5', 'N:A6.K642.T653.KJ4 QJ73.875..QT7652 K85.AJT.AKJ742.3 T942.Q93.Q98.A98 ♣,♦,♥,♠,NT;N:7,11,10,7,10;E:6,1,2,5,2;S:7,11,10,7,10;W:6,1,2,5,2', 'N:A76.6.QJ973.T972 KQT9.AKJ72.A64.5 85.Q983.KT.KQJ86 J432.T54.852.A43 ♣,♦,♥,♠,NT;N:9,8,4,3,6;E:3,5,8,9,7;S:9,8,4,3,6;W:3,5,8,9,7', 'N:K43.AJT97.Q.K765 AJT765.K643..AJT 982.Q5.AJT64.Q98 Q.82.K987532.432 ♣,♦,♥,♠,NT;N:7,5,6,6,6;E:6,8,5,7,7;S:7,5,6,5,6;W:6,8,5,7,6', 'N:A.AQT92.QT765.J9 954.K6.J8.AQ5432 Q87.J7543.AK92.8 KJT632.8.43.KT76 ♣,♦,♥,♠,NT;N:4,11,11,4,7;E:7,2,2,8,6;S:4,11,11,4,7;W:7,2,2,8,6', 'N:AKT5.K3.Q962.AQ4 43.J542.KT7.JT92 Q6.AT76.A83.K765 J9872.Q98.J54.83 ♣,♦,♥,♠,NT;N:11,11,10,10,12;E:2,2,2,3,1;S:11,11,10,10,12;W:2,2,2,3,1', 'N:KJ972.543.AK42.K A.82.QJ7.AQ97653 T85.AJ7.T65.JT42 Q643.KQT96.983.8 ♣,♦,♥,♠,NT;N:5,7,5,8,8;E:8,5,8,5,5;S:5,7,5,8,8;W:8,5,8,5,5', 'N:KT862.Q643.Q.AT3 AJ974.72.9875.Q2 Q3.AK.K643.K8754 5.JT985.AJT2.J96 ♣,♦,♥,♠,NT;N:10,7,8,9,8;E:3,6,5,4,5;S:10,7,8,9,8;W:3,6,5,4,4', 'N:AKQ754.QJ3.8.AQ9 863.AT7.KJ43.T73 JT2.K85.92.KJ654 9.9642.AQT765.82 ♣,♦,♥,♠,NT;N:11,5,7,11,6;E:1,8,6,1,2;S:11,5,7,11,6;W:1,8,6,1,2', 'N:J8.3.Q863.Q87642 K7.AT.AT975.K953 T643.K985.KJ4.AT AQ952.QJ7642.2.J ♣,♦,♥,♠,NT;N:6,5,2,3,5;E:6,8,10,10,8;S:6,5,2,3,5;W:6,7,10,9,8', 'N:K.Q943.AQ4.AQ852 T.A52.T9875.KT97 AJ964.KT8.62.J63 Q87532.J76.KJ3.4 ♣,♦,♥,♠,NT;N:10,8,10,9,9;E:3,5,2,3,3;S:10,7,10,8,9;W:3,5,3,4,3', 'N:762.72.KQJT8.J86 Q85.T9843..AQ975 KJT43.QJ.5.KT432 A9.AK65.A976432. ♣,♦,♥,♠,NT;N:5,4,1,5,4;E:8,8,12,8,9;S:5,5,1,5,4;W:8,8,11,8,9', 'N:J952.AKJ2.KQ43.T Q.T975.J865.AKQ6 AK843.Q6.T9.9854 T76.843.A72.J732 ♣,♦,♥,♠,NT;N:7,8,8,11,8;E:6,5,4,2,4;S:7,8,8,11,8;W:6,5,4,2,4', 'N:A4.QJ876.QJ72.Q8 KT8532.K95.3.A93 J7.A432.AK95.JT4 Q96.T.T864.K7652 ♣,♦,♥,♠,NT;N:5,8,9,4,7;E:7,4,4,9,4;S:5,8,9,4,7;W:7,4,4,9,4', 'N:AJT82.T97..K8752 KQ6.J832.Q874.T3 953.AK65.AT96.64 74.Q4.KJ532.AQJ9 ♣,♦,♥,♠,NT;N:7,5,7,9,6;E:5,7,5,3,6;S:8,5,7,9,6;W:5,7,6,3,6', 'N:A8.J5.K9853.QJ72 Q974.K9743.2.AT9 KJT632.Q.AQ6.643 5.AT862.JT74.K85 ♣,♦,♥,♠,NT;N:7,9,3,9,6;E:5,4,10,4,7;S:7,9,3,9,6;W:5,4,10,4,7']
This cluster consists of
          1 nodes in total
          8.0 CPU resources in total

deal count: 50 time: 0:00:04.550863
```

## Set up your Ray on Golem cluster

We will now scale the execution even further - we will use a Ray on Golem cluster.

Run the following to make sure the needed software is installed:

```bash
# install ray-on-golem (just make sure you have it after the previous steps)
pip3 install -U ray-on-golem
```

Now, run the following to start a basic cluster, based on our example configuration. Your cluster will run on our testnet - it is free, but not very powerful.

```bash
# Download the golem-cluster.yaml
wget https://github.com/golemfactory/ray-on-golem/raw/main/golem-cluster.yaml

# In this command:
# * yagna starts in the background (if not running)
# * ray-on-golem cluster manager starts in the background
# * ray head node is started on a golem provider
ray up golem-cluster.yaml --yes

# Check if Ray on Golem cluster is running
ray exec golem-cluster.yaml 'ray status'
```

{% partial file="ray/example-cluster-testnet-and-cap.md" /%}

{% partial file="ray/consult-troubleshooting.md" /%}

## Run the app

### Pass endplay library requirement to Ray

Now that the app will be running on a cluster, we need to inform it that the `endplay` library is required on individual worker nodes.

Replacing `ray.init()` with the following will do the trick:

```python
# endplay library dependency
runtime_env = {
    "pip": [
        "Pillow",  # explicit uppercased "Pillow", as pip complains about mismatched metadata in endplay dependency tree
        "endplay==0.4.11b0",
    ]
}


# Use the default ray cluster or start a local one
# Make sure endplay lib is installed
ray.init(runtime_env=runtime_env)
```

When you run the code, it takes a bit longer than previously, as Ray needs to create a virtual environment before the execution.

### Submit the code to cluster & observe the autoscaling

With the cluster up and running, with Ray notified about endplay lib dependency, executing our app is as simple as:

```bash
ray submit golem-cluster.yaml dds.py
```

```
2023-09-18 09:16:38,986	WARNING util.py:249 -- Dropping the empty legacy field head_node. head_nodeis not supported for ray>=2.0.0. It is recommended to removehead_node from the cluster config.
2023-09-18 09:16:38,986	WARNING util.py:249 -- Dropping the empty legacy field worker_nodes. worker_nodesis not supported for ray>=2.0.0. It is recommended to removeworker_nodes from the cluster config.
Loaded cached provider configuration
If you experience issues with the cloud provider, try re-running the command with --no-config-cache.
Fetched IP: 192.168.0.3
2023-09-18 09:16:40,697	WARNING util.py:249 -- Dropping the empty legacy field head_node. head_nodeis not supported for ray>=2.0.0. It is recommended to removehead_node from the cluster config.
2023-09-18 09:16:40,697	WARNING util.py:249 -- Dropping the empty legacy field worker_nodes. worker_nodesis not supported for ray>=2.0.0. It is recommended to removeworker_nodes from the cluster config.
Fetched IP: 192.168.0.3
2023-09-18 07:16:40,451	INFO worker.py:1364 -- Connecting to existing Ray cluster at address: 192.168.0.3:6379...
[2023-09-18 07:16:40,458 I 892 892] global_state_accessor.cc:356: This node has an IP address of 10.42.42.2, while we can not find the matched Raylet address. This maybe come from when you connect the Ray cluster with a different IP address or connect a container.
2023-09-18 07:16:40,458	INFO worker.py:1544 -- Connected to Ray cluster. View the dashboard at 10.42.42.2:8265
This cluster consists of
          1 nodes in total
          1.0 CPU resources in total

(autoscaler +2s) Tip: use `ray status` to view detailed cluster status. To disable these messages, set RAY_SCHEDULER_EVENTS=0.
(autoscaler +2s) Adding 1 node(s) of type ray.worker.default.
(autoscaler +16s) Resized to 2 CPUs.
['N:643.QT963.JT4.Q7 AKQ.A8.KQ96.JT63 T97.K752.83.9542 J852.J4.A752.AK8 ♣,♦,♥,♠,NT;N:0,0,5,0,0;E:13,13,8,13,13;S:0,0,5,0,0;W:13,13,8,13,13', 'N:A64.AJT7.JT754.8 Q9852..63.AKQJ76 K73.K98.AQ8.T532 JT.Q65432.K92.94 ♣,♦,♥,♠,NT;N:4,11,9,4,7;E:9,2,4,8,6;S:4,10,9,4,7;W:9,2,4,8,6', 'N:2.987542.KQ9.QT4 T9765.T63.J652.A A3.AJ.AT.KJ87632 KQJ84.KQ.8743.95 ♣,♦,♥,♠,NT;N:12,5,10,6,8;E:1,7,3,7,2;S:12,5,10,6,8;W:1,7,3,7,2', 'N:AKJ76.8.QJ8.KQ52 T92.Q4.AT5.J9864 3.KJT973.9632.73 Q854.A652.K74.AT ♣,♦,♥,♠,NT;N:6,7,9,6,6;E:6,5,4,6,6;S:6,7,9,6,6;W:7,5,4,7,7', 'N:AJ76.Q874.KJ4.T7 82.T65.AQ83.AKQJ KT93.A32.T652.82 Q54.KJ9.97.96543 ♣,♦,♥,♠,NT;N:4,6,7,8,5;E:9,6,6,5,7;S:4,6,7,7,5;W:9,6,6,5,7', 'N:T964.QJ96.J82.AQ Q2.853.7654.7532 K85.A72.KT3.KJT6 AJ73.KT4.AQ9.984 ♣,♦,♥,♠,NT;N:7,7,7,8,8;E:5,5,4,4,4;S:8,7,8,9,9;W:5,5,4,4,4', 'N:8.AQJ842.43.K942 QJ4.KT976.J876.5 AT5.3.KQ.AQJ8763 K97632.5.AT952.T ♣,♦,♥,♠,NT;N:12,4,9,4,9;E:0,7,4,9,3;S:12,4,9,4,9;W:0,7,4,9,3', 'N:875.7543.AT7.QJ5 AJT.T.KQJ8652.43 Q63.AKQ86..AKT82 K942.J92.943.976 ♣,♦,♥,♠,NT;N:10,4,10,7,10;E:2,9,1,5,2;S:10,4,10,7,10;W:2,9,1,5,2', 'N:T765.T4.QJT98.J3 AKQ4.QJ32.K76.84 93.98.A432.K9765 J82.AK765.5.AQT2 ♣,♦,♥,♠,NT;N:3,6,0,1,2;E:9,7,12,12,11;S:3,6,0,1,2;W:8,7,12,12,8', 'N:AJT42.K97.KT5.T3 3.AQ2.QJ432.QJ86 K98765..97.AK974 Q.JT86543.A86.52 ♣,♦,♥,♠,NT;N:11,6,4,12,9;E:2,6,9,1,3;S:10,6,4,12,5;W:2,6,8,1,3', 'N:K4.865.AKJ86.AQ6 J953.AJ9.T93.T87 AQT8.KQ3.Q752.K2 762.T742.4.J9543 ♣,♦,♥,♠,NT;N:9,12,11,12,12;E:3,1,2,1,1;S:9,12,11,12,12;W:3,1,2,1,1', 'N:A6543.765.J84.87 J92.Q942.65.T964 QT.KJT8.KQT732.J K87.A3.A9.AKQ532 ♣,♦,♥,♠,NT;N:4,9,7,7,4;E:9,4,6,6,8;S:4,9,7,7,4;W:9,4,6,6,8', 'N:KJ9872.9753.T.AK 5.K8.Q9732.QT953 .QJT62.854.J8742 AQT643.A4.AKJ6.6 ♣,♦,♥,♠,NT;N:4,2,7,5,4;E:8,11,6,8,8;S:4,2,7,5,4;W:8,11,6,8,8', 'N:T954.KT975.9.T43 3.J84.A752.KQ952 AQ862.A6.KJ.AJ87 KJ7.Q32.QT8643.6 ♣,♦,♥,♠,NT;N:7,5,8,9,6;E:5,8,5,4,7;S:7,5,8,9,6;W:5,8,4,3,6', 'N:QJ763.KT94.K.943 K4.3.JT963.KT652 AT982.82.AQ.QJ87 5.AQJ765.87542.A ♣,♦,♥,♠,NT;N:8,2,5,8,8;E:5,10,7,3,4;S:8,2,5,8,8;W:5,10,7,3,4', 'N:AQ8642.T72.T6.A4 5.AJ965.KQ3.T753 KJT9.K4.AJ97.J92 73.Q83.8542.KQ86 ♣,♦,♥,♠,NT;N:5,9,5,10,9;E:8,3,7,2,3;S:5,9,5,10,9;W:8,3,7,2,3', 'N:AT9.T5.JT432.AK4 QJ3.Q9862.97.T93 K842.AJ43.AK5.85 765.K7.Q86.QJ762 ♣,♦,♥,♠,NT;N:8,11,9,10,10;E:5,2,4,3,2;S:8,11,9,10,10;W:5,2,4,3,2', 'N:K7.T764.95.AQJ74 A986.J2.QT864.62 T532.Q983.73.KT8 QJ4.AK5.AKJ2.953 ♣,♦,♥,♠,NT;N:6,2,7,3,3;E:6,11,6,10,8;S:6,2,7,3,3;W:6,11,6,10,8', 'N:4.AJT43.KQJ95.72 Q3.9872.876.QJ96 AJT987.Q65.AT.KT K652.K.432.A8543 ♣,♦,♥,♠,NT;N:5,11,11,10,8;E:6,2,1,2,2;S:6,11,11,11,11;W:6,2,1,2,2', 'N:AJ8432.K.9532.86 9765.AQT62.T.KJ4 KQ.98.AKQ7.AQ975 T.J7543.J864.T32 ♣,♦,♥,♠,NT;N:9,11,4,12,8;E:2,2,8,1,5;S:9,11,4,12,8;W:2,2,8,0,5', 'N:743.Q75.T76.AQ95 AJT85.8.AJ4.KJT4 KQ2.AKJT.K932.63 96.96432.Q85.872 ♣,♦,♥,♠,NT;N:6,8,8,6,8;E:6,4,5,7,4;S:6,8,8,6,8;W:6,4,5,7,4', 'N:AKJ8.QJ95.T982.8 T54.K864.K.QT542 Q92.A732.54.K963 763.T.AQJ763.AJ7 ♣,♦,♥,♠,NT;N:5,5,8,8,4;E:7,7,4,5,6;S:5,5,8,8,4;W:7,7,4,5,6', 'N:K98753.A4.4.QT62 42.Q3.AKQ976.875 AQJT.KT876.T2.K3 6.J952.J853.AJ94 ♣,♦,♥,♠,NT;N:7,5,9,11,6;E:5,8,4,1,5;S:7,5,9,11,6;W:5,8,4,1,5', 'N:K62.T965.K52.Q52 AQ73.KQJ.J97.KJ6 JT4.8742.AT.8743 985.A3.Q8643.AT9 ♣,♦,♥,♠,NT;N:3,2,4,3,2;E:10,11,8,9,10;S:3,2,4,3,2;W:10,11,8,9,10', 'N:6.Q763.QT54.J853 K.KJT92.973.K976 AJ9532.85.A8.QT2 QT874.A4.KJ62.A4 ♣,♦,♥,♠,NT;N:5,4,4,4,5;E:8,9,9,9,8;S:5,4,4,4,5;W:8,9,9,9,8', 'N:J964.JT5432.72.Q K7.98.Q98.A87542 2.KQ6.AKJT6.JT96 AQT853.A7.543.K3 ♣,♦,♥,♠,NT;N:4,8,9,5,6;E:7,3,3,8,6;S:4,8,9,5,6;W:7,3,2,8,6', 'N:T873.K752..AKQJ8 92.J9.AT9842.753 AKQ5.AT.KJ763.42 J64.Q8643.Q5.T96 ♣,♦,♥,♠,NT;N:12,9,10,13,11;E:1,4,3,0,1;S:12,9,10,13,11;W:1,4,3,0,1', 'N:A763.J432.K5.T52 JT9854.KT.73.A94 Q.Q9865.98642.KJ K2.A7.AQJT.Q8763 ♣,♦,♥,♠,NT;N:3,4,8,2,2;E:10,8,4,10,9;S:3,4,8,2,2;W:10,8,5,11,9', 'N:AK5.AJ96.9.AKJ85 Q874.QT4.KQ854.2 T932.83.JT73.T93 J6.K752.A62.Q764 ♣,♦,♥,♠,NT;N:9,6,6,7,7;E:3,7,6,5,5;S:9,6,6,7,7;W:3,7,6,5,6', 'N:J8532.43.Q65.KT4 74.KQT8652.32.AJ QT6.A97.KT7.7632 AK9.J.AJ984.Q985 ♣,♦,♥,♠,NT;N:4,3,1,5,2;E:8,10,11,7,11;S:4,3,1,5,2;W:8,10,11,7,11', 'N:AQT984.6542..JT8 J3.KT87.K87.AK95 K765.Q3.A9532.64 2.AJ9.QJT64.Q732 ♣,♦,♥,♠,NT;N:1,4,3,9,5;E:9,9,9,4,6;S:1,4,3,9,5;W:10,9,9,4,6', 'N:AQT.9.KJ5.JT9653 86.AT62.A4.AK874 KJ74.K543.QT32.2 9532.QJ87.9876.Q ♣,♦,♥,♠,NT;N:7,8,5,8,6;E:6,5,8,5,5;S:7,8,5,8,6;W:6,5,8,5,5', 'N:5.T9873.K3.KQ985 T63.K4.QJ9654.T6 KQJ8.AQJ.A72.742 A9742.652.T8.AJ3 ♣,♦,♥,♠,NT;N:11,7,11,9,11;E:2,6,2,4,2;S:11,7,11,9,11;W:2,6,2,4,2', 'N:T42.Q8543.QJ8.83 AJ8765.KJT.7.T65 K.76.AK9532.QJ97 Q93.A92.T64.AK42 ♣,♦,♥,♠,NT;N:3,8,4,2,2;E:9,5,9,11,7;S:3,8,4,2,2;W:9,5,9,11,7', 'N:T97653..A642.J52 .AQT9764.KJ5.K76 J84.53.Q97.AQ943 AKQ2.KJ82.T83.T8 ♣,♦,♥,♠,NT;N:8,7,2,8,3;E:5,5,10,5,7;S:8,7,2,8,3;W:5,5,10,5,7', 'N:A953.A.JT9873.K9 QT864.95.54.JT75 K2.J872.AQ6.A643 J7.KQT643.K2.Q82 ♣,♦,♥,♠,NT;N:7,12,7,8,10;E:5,1,6,5,3;S:8,12,7,8,10;W:5,1,6,5,3', 'N:J93.K853.JT976.K K8.Q9.AQ842.QT63 AT742.AJ2.K3.754 Q65.T764.5.AJ982 ♣,♦,♥,♠,NT;N:4,6,7,8,5;E:9,6,6,4,7;S:4,6,7,8,5;W:9,6,6,4,7', 'N:AKT862.QJ9.4.K63 Q3.52.AK876.A974 975.KT.Q932.JT52 J4.A87643.JT5.Q8 ♣,♦,♥,♠,NT;N:8,6,5,9,7;E:5,7,8,4,4;S:8,6,5,9,7;W:5,7,8,4,4', 'N:A2.QT93.AJ.KJ642 J94.J762.842.983 T7.5.KQT975.AQT5 KQ8653.AK84.63.7 ♣,♦,♥,♠,NT;N:12,12,7,5,11;E:1,1,6,7,1;S:12,12,7,5,11;W:1,1,6,7,1', 'N:A9842.K.KT2.QT53 Q5.AQ43.J765.J96 JT3.J96.A83.A872 K76.T8752.Q94.K4 ♣,♦,♥,♠,NT;N:9,6,5,8,8;E:3,6,8,4,5;S:9,6,5,9,7;W:3,6,8,4,5', 'N:KJ63.64.KQ7.AKJ8 T8.J82.JT432.Q73 Q72.AK93.65.T642 A954.QT75.A98.95 ♣,♦,♥,♠,NT;N:10,7,8,9,8;E:3,6,4,4,4;S:10,7,8,9,9;W:3,6,5,4,4', 'N:976.AK8.A963.A92 AJ32.QJ75.4.KQ74 Q85.T632.K5.T653 KT4.94.QJT872.J8 ♣,♦,♥,♠,NT;N:5,5,5,5,5;E:7,7,7,8,7;S:5,5,5,5,5;W:7,7,7,8,8', 'N:5432.AKJ84.Q8.QT KJT7.Q5.T96.J764 AQ96.972.K753.AK 8.T63.AJ42.98532 ♣,♦,♥,♠,NT;N:6,8,11,11,10;E:6,4,2,2,2;S:6,8,11,11,10;W:6,4,2,2,2', 'N:9742.Q.A62.KJ432 KJ.KJT9852.Q8.QT A63.643.943.9876 QT85.A7.KJT75.A5 ♣,♦,♥,♠,NT;N:6,2,2,2,2;E:6,10,10,8,8;S:6,2,2,2,2;W:6,10,11,9,11', 'N:KT4.A98.K653.A97 AQ92.K742.AJT.52 3.QJT63.Q72.KQJ4 J8765.5.984.T863 ♣,♦,♥,♠,NT;N:9,8,10,5,7;E:4,4,3,8,4;S:9,8,9,5,7;W:4,4,3,8,4', 'N:KT5.982.AJT5.Q85 Q98742.T3.KQ72.J A63.AQJ7.83.T964 J.K654.964.AK732 ♣,♦,♥,♠,NT;N:7,6,7,6,8;E:6,6,5,7,5;S:7,6,7,6,8;W:6,6,5,7,5', 'N:A95.QJ.T82.AQT52 KJ74.T864.KJ63.9 T2.K973.Q97.J873 Q863.A52.A54.K64 ♣,♦,♥,♠,NT;N:9,6,6,5,7;E:4,7,7,8,6;S:9,6,6,5,7;W:4,7,7,8,6', 'N:532.KQ87.AJ2.Q97 T7.965.KT96543.4 A86.AJ43.Q7.AK62 KQJ94.T2.8.JT853 ♣,♦,♥,♠,NT;N:9,7,11,8,11;E:4,6,2,5,2;S:9,7,11,8,11;W:4,6,2,5,2', 'N:3.AQ74.643.AT753 9.KT83.AKJ8.KJ94 T7542.J95.97.Q62 AKQJ86.62.QT52.8 ♣,♦,♥,♠,NT;N:6,1,4,2,2;E:7,11,8,11,11;S:6,1,4,2,2;W:7,11,8,11,11', 'N:KJ54.JT32.T62.KT AT83.9.QJ853.762 Q96.AQ64.A974.J5 72.K875.K.AQ9843 ♣,♦,♥,♠,NT;N:3,6,7,7,6;E:9,6,6,6,7;S:3,7,7,7,6;W:9,6,6,6,7']
This cluster consists of
          2 nodes in total
          2.0 CPU resources in total

deal count: 50 time: 0:00:18.404510
shared connection to 192.168.0.3 closed.
```

Notice how at first, there is only one node, and after the computation, there is more. This is Ray autoscaler at work.
The time needed to add new nodes might be too long for you to notice when you run the dds.py code as it is. If you increase `DEAL_CNT` and/or rerun the app, the difference will be more visible

```bash
ray submit golem-cluster.yaml dds.py
```

```
2023-09-18 09:18:23,831	WARNING util.py:249 -- Dropping the empty legacy field head_node. head_nodeis not supported for ray>=2.0.0. It is recommended to removehead_node from the cluster config.
2023-09-18 09:18:23,831	WARNING util.py:249 -- Dropping the empty legacy field worker_nodes. worker_nodesis not supported for ray>=2.0.0. It is recommended to removeworker_nodes from the cluster config.
Loaded cached provider configuration
If you experience issues with the cloud provider, try re-running the command with --no-config-cache.
Fetched IP: 192.168.0.3
2023-09-18 09:18:25,526	WARNING util.py:249 -- Dropping the empty legacy field head_node. head_nodeis not supported for ray>=2.0.0. It is recommended to removehead_node from the cluster config.
2023-09-18 09:18:25,527	WARNING util.py:249 -- Dropping the empty legacy field worker_nodes. worker_nodesis not supported for ray>=2.0.0. It is recommended to removeworker_nodes from the cluster config.
Fetched IP: 192.168.0.3
2023-09-18 07:18:25,278	INFO worker.py:1364 -- Connecting to existing Ray cluster at address: 192.168.0.3:6379...
[2023-09-18 07:18:25,285 I 1351 1351] global_state_accessor.cc:356: This node has an IP address of 10.42.42.2, while we can not find the matched Raylet address. This maybe come from when you connect the Ray cluster with a different IP address or connect a container.
2023-09-18 07:18:25,285	INFO worker.py:1544 -- Connected to Ray cluster. View the dashboard at 10.42.42.2:8265
This cluster consists of
          4 nodes in total
          4.0 CPU resources in total

['N:85.Q954.AT72.KJ6 Q973.JT73.K.AQ73 AJ62.86.J983.542 KT4.AK2.Q654.T98 ♣,♦,♥,♠,NT;N:3,5,4,3,3;E:10,7,9,10,9;S:3,5,4,3,4;W:10,8,9,10,9', 'N:Q.J9763.983.KT64 53.K4.JT64.AQJ53 K964.AQ2.AKQ5.87 AJT872.T85.72.92 ♣,♦,♥,♠,NT;N:7,8,9,5,9;E:6,5,4,7,4;S:7,8,9,5,8;W:5,4,3,7,4', 'N:JT432.A7.QJ52.96 98.K52.T97643.J4 65.QJ643.AK8.A85 AKQ7.T98..KQT732 ♣,♦,♥,♠,NT;N:4,7,7,7,6;E:9,5,5,6,4;S:4,7,7,7,6;W:9,5,5,6,4', 'N:T874.AK643.A972. Q9.QT9.KQT863.87 A65.J52.J5.KQT54 KJ32.87.4.AJ9632 ♣,♦,♥,♠,NT;N:6,6,8,7,7;E:7,6,4,5,6;S:6,6,8,7,7;W:7,7,4,5,6', 'N:94.J63.AQT96.Q42 AT85.AKQ8.K.T865 J632.T9.8742.AJ3 KQ7.7542.J53.K97 ♣,♦,♥,♠,NT;N:3,8,3,4,4;E:9,5,10,9,7;S:3,8,3,4,4;W:9,5,10,9,7', 'N:AT753.986.T.Q542 642.QT53.J542.63 J98.AK742.A976.7 KQ.J.KQ83.AKJT98 ♣,♦,♥,♠,NT;N:5,5,9,9,7;E:8,8,4,3,6;S:5,5,9,9,7;W:8,8,4,3,6', 'N:9854.K8763.7.QJ2 JT3.J52.T65.T963 KQ.94.AKQJ984.87 A762.AQT.32.AK54 ♣,♦,♥,♠,NT;N:5,9,7,6,8;E:8,4,6,7,4;S:5,9,7,6,8;W:8,4,6,7,4', 'N:T9.J84.AKQ965.32 J6543.K5.4.JT965 2.AQ976.J73.Q874 AKQ87.T32.T82.AK ♣,♦,♥,♠,NT;N:5,10,10,3,6;E:8,2,2,10,2;S:5,10,10,3,6;W:8,2,2,10,2', 'N:KJ86.KQ4.Q92.KJ6 T75.AJ86.KT3.942 4.97532.A64.QT85 AQ932.T.J875.A73 ♣,♦,♥,♠,NT;N:6,6,8,5,7;E:6,7,5,8,6;S:6,6,7,5,6;W:6,7,5,8,6', 'N:AT8.8642.653.AK2 Q32.K9.AKT9.QJ83 K9654.53.84.T765 J7.AQJT7.QJ72.94 ♣,♦,♥,♠,NT;N:5,3,4,7,4;E:8,9,9,6,9;S:5,3,4,7,4;W:8,9,9,6,9', 'N:92.965.Q8653.AK5 K.AQJ72.A9.QT843 QJ843.T3.J4.J962 AT765.K84.KT72.7 ♣,♦,♥,♠,NT;N:4,4,1,4,3;E:9,9,11,9,9;S:4,4,1,4,3;W:9,9,11,9,9', 'N:J5.KT92.AJ5.A765 KT9.Q654.KQ98.K2 8743.83.7632.T84 AQ62.AJ7.T4.QJ93 ♣,♦,♥,♠,NT;N:2,2,4,2,2;E:8,9,9,10,10;S:2,2,4,2,2;W:11,10,9,11,11', 'N:K93.K432.A986.92 A85.AQT976.Q53.5 J64.J.J7.KQ87643 QT72.85.KT42.AJT ♣,♦,♥,♠,NT;N:7,3,3,3,3;E:6,9,10,10,10;S:7,3,2,3,3;W:6,9,10,10,10', 'N:Q.JT654.KQJT.AQ9 KJ4.K732.A84.J87 AT95.Q.9652.K632 87632.A98.73.T54 ♣,♦,♥,♠,NT;N:9,10,8,7,9;E:4,2,5,5,4;S:9,10,8,7,9;W:4,2,5,5,4', 'N:KJT75.A84.7.AT87 .KQJ73.K64.KQJ32 642.T952.A952.96 AQ983.6.QJT83.54 ♣,♦,♥,♠,NT;N:4,3,5,6,4;E:9,10,6,6,8;S:4,3,5,6,4;W:9,10,6,6,9', 'N:9.J942.J973.QT92 JT7.Q3.AQT4.8753 A8532.K865.K65.K KQ64.AT7.82.AJ64 ♣,♦,♥,♠,NT;N:5,6,7,5,5;E:8,6,5,8,8;S:5,6,7,5,5;W:8,6,5,8,8', 'N:A7.QJ7.76.KT9654 J92.K4.J9852.Q72 KQ653.A96.Q43.A8 T84.T8532.AKT.J3 ♣,♦,♥,♠,NT;N:10,7,8,11,9;E:1,6,4,1,3;S:10,7,9,11,10;W:1,6,4,1,3', 'N:A63.Q9.KJ63.7652 K742.KJ863.98.Q3 T985.54.AT74.J84 QJ.AT72.Q52.AKT9 ♣,♦,♥,♠,NT;N:3,6,1,5,4;E:10,7,10,8,8;S:3,6,1,5,4;W:10,7,10,8,8', 'N:KQ65.KT74.Q95.AK J87.J85.K42.T952 T3.96.A8763.QJ83 A942.AQ32.JT.764 ♣,♦,♥,♠,NT;N:8,10,7,8,9;E:4,3,5,5,4;S:8,10,7,7,9;W:4,3,5,5,4', 'N:AT3.62.T7.AQJT94 K4.Q.AK96432.K76 Q9762.T7543..832 J85.AKJ98.QJ85.5 ♣,♦,♥,♠,NT;N:9,1,4,7,2;E:4,11,8,5,11;S:9,1,4,7,2;W:4,11,8,5,11', 'N:AK.AJ542.K93.QT2 QT7643.T97.Q754. 9852.KQ3.A8.KJ94 J.86.JT62.A87653 ♣,♦,♥,♠,NT;N:10,7,12,9,12;E:3,4,1,4,1;S:10,7,11,8,12;W:3,4,1,4,1', 'N:Q54.KJ32.9762.Q8 KJ62.A9.AQ.KJT95 A7.T86.JT853.A72 T983.Q754.K4.643 ♣,♦,♥,♠,NT;N:4,8,7,4,6;E:9,5,6,9,7;S:4,8,6,3,4;W:9,5,6,9,7', 'N:KT9742.T76.752.3 A6.K954.AQJ96.82 5.832.T8.AQJT954 QJ83.AQJ.K43.K76 ♣,♦,♥,♠,NT;N:6,1,1,4,1;E:7,11,11,9,12;S:6,1,1,4,1;W:7,11,11,9,12', 'N:KJ5.82.QT.AQJ642 A943.A97653.A72. QT862..KJ8643.K3 7.KQJT4.95.T9875 ♣,♦,♥,♠,NT;N:9,7,1,10,5;E:4,4,12,3,8;S:9,7,1,10,5;W:4,4,12,3,8', 'N:J86.Q963.A97.AQ6 T9753.K4.KT42.J9 AQ4.A87.Q53.K843 K2.JT52.J86.T752 ♣,♦,♥,♠,NT;N:9,9,10,8,10;E:3,4,3,5,3;S:10,9,10,8,10;W:3,4,3,5,3', 'N:76.Q5.K97653.Q65 QJ84.92.AQJ4.AJ8 92.AKJT6..KT9742 AKT53.8743.T82.3 ♣,♦,♥,♠,NT;N:10,5,7,2,4;E:3,8,5,10,8;S:10,5,7,2,4;W:3,8,5,9,8', 'N:74.86.AKJ943.K97 J9.AKT32.T62.A82 AKQT6.Q75.75.Q43 8532.J94.Q8.JT65 ♣,♦,♥,♠,NT;N:8,10,7,10,10;E:5,1,6,1,2;S:8,10,7,10,10;W:5,1,5,1,2', 'N:AQJT985.J.K72.K8 32.KT.T865.QT973 K74.AQ5.J3.AJ542 6.9876432.AQ94.6 ♣,♦,♥,♠,NT;N:10,6,6,12,12;E:3,6,7,0,0;S:10,6,6,12,12;W:3,6,7,0,0', 'N:A9752.982.T76.T6 JT.AKQ3.K92.9843 K8643.J64.843.A5 Q.T75.AQJ5.KQJ72 ♣,♦,♥,♠,NT;N:2,1,2,6,5;E:11,11,11,7,7;S:2,1,2,6,5;W:11,11,11,7,7', 'N:T83.J842.Q8.KJ73 54.KT96.AJ543.62 QJ96.7.KT96.AQT4 AK72.AQ53.72.985 ♣,♦,♥,♠,NT;N:8,5,4,6,6;E:5,8,9,6,7;S:8,5,4,6,6;W:5,8,9,6,7', 'N:Q2.QT6.K72.AQT62 T943.42.Q865.KJ5 KJ87.AKJ987.94.7 A65.53.AJT3.9843 ♣,♦,♥,♠,NT;N:8,6,11,8,9;E:5,5,1,3,3;S:8,6,11,8,9;W:5,5,1,3,3', 'N:A852.QJ6.Q43.K93 97643.94.987.AQ8 KJ.T852.AT5.T764 QT.AK73.KJ62.J52 ♣,♦,♥,♠,NT;N:6,5,6,5,6;E:6,8,6,8,6;S:6,5,7,5,7;W:6,8,6,8,6', 'N:.K9842.QJ8543.A4 987543.Q.6.T8532 J62.AJT753.KT2.J AKQT.6.A97.KQ976 ♣,♦,♥,♠,NT;N:3,12,11,2,7;E:10,1,1,10,5;S:3,12,11,2,7;W:10,1,1,10,5', 'N:K962..KT8.AJT983 AQT8.J97.QJ5.Q76 J743.KQ854.A97.5 5.AT632.6432.K42 ♣,♦,♥,♠,NT;N:8,7,6,10,7;E:4,5,7,3,6;S:7,7,6,8,6;W:5,5,7,3,6', 'N:QT32.2.J986.T975 A9865.JT83.3.KJ6 K74.AQ65.A74.A42 J.K974.KQT52.Q83 ♣,♦,♥,♠,NT;N:7,6,4,7,6;E:6,7,8,6,7;S:7,6,4,7,6;W:6,7,8,6,7', 'N:85.Q5.A73.KT8765 AKJ7.J73.JT6.Q93 643.KT82.KQ52.A4 QT92.A964.984.J2 ♣,♦,♥,♠,NT;N:9,9,7,7,8;E:3,4,6,6,5;S:9,9,7,7,8;W:3,4,6,6,5', 'N:J2.JT986.Q964.K9 43.72.KJ7.QT8543 AK75.K53.AT53.A6 QT986.AQ4.82.J72 ♣,♦,♥,♠,NT;N:5,9,10,6,7;E:8,4,3,6,5;S:5,9,10,7,7;W:8,4,3,6,5', 'N:J64.KQJ8.A62.KJ2 T95.AT9652.T.AQ7 AQ87.4.KQJ84.853 K32.73.9753.T964 ♣,♦,♥,♠,NT;N:7,9,6,9,9;E:6,4,7,4,4;S:7,9,6,8,9;W:6,4,7,4,4', 'N:Q72.AJ54.QJ6.QJ4 KJT83.Q632.AK4.T A4.KT87.T832.A87 965.9.975.K96532 ♣,♦,♥,♠,NT;N:5,7,9,6,8;E:7,5,4,6,4;S:5,7,8,6,8;W:7,5,4,6,4', 'N:K7.Q963.KT4.8764 Q862.AKT.Q985.QJ A93.872.AJ32.AK9 JT54.J54.76.T532 ♣,♦,♥,♠,NT;N:8,9,8,6,8;E:4,4,4,7,4;S:8,9,8,6,8;W:4,4,4,7,4', 'N:KJT95.Q87.A9.984 2.AK943.JT743.AK 643.T652.865.Q76 AQ87.J.KQ2.JT532 ♣,♦,♥,♠,NT;N:2,1,3,4,3;E:10,12,10,7,9;S:2,1,3,4,3;W:10,12,10,8,10', 'N:T6.65.KQJ8765.84 87.Q82.A432.KJT7 KQJ532.JT43..Q63 A94.AK97.T9.A952 ♣,♦,♥,♠,NT;N:2,7,3,5,3;E:11,6,10,8,10;S:2,7,3,5,3;W:11,6,10,7,10', 'N:QJ873.T.AK7.KT52 4.AK8753.QJ986.J T65.QJ9642.T42.8 AK92..53.AQ97643 ♣,♦,♥,♠,NT;N:4,4,5,6,5;E:8,8,7,6,7;S:4,4,5,6,5;W:8,8,7,7,7', 'N:AT7632.J2.K3.964 QJ4.Q.JT9654.AT8 K9.K9765.8.KQJ53 85.AT843.AQ72.72 ♣,♦,♥,♠,NT;N:8,4,7,8,6;E:5,9,6,4,6;S:8,4,7,8,6;W:5,9,6,4,6', 'N:Q5.AK8.AKQJ65.T4 J3.Q9762.2.J9852 87642.J54.T97.63 AKT9.T3.843.AKQ7 ♣,♦,♥,♠,NT;N:2,8,3,6,4;E:10,5,8,6,5;S:2,8,3,6,4;W:10,5,8,6,5', 'N:6.AQJ54.652.K943 K5432.K32.74.QT5 AQT987.T97.QJ.87 J.86.AKT983.AJ62 ♣,♦,♥,♠,NT;N:4,3,8,7,4;E:8,10,5,6,8;S:4,3,8,7,4;W:8,10,5,6,8', 'N:JT2.AT9832.Q53.K 864.QJ6.K84.A765 A97.K74.JT76.T93 KQ53.5.A92.QJ842 ♣,♦,♥,♠,NT;N:2,5,7,3,3;E:11,7,6,8,8;S:2,6,7,4,3;W:11,7,6,8,8', 'N:AJ542.A953.93.A3 Q7.Q642.54.KJ976 T986.KT7.AQ8.Q85 K3.J8.KJT762.T42 ♣,♦,♥,♠,NT;N:7,6,9,9,9;E:6,6,4,3,3;S:7,7,9,10,9;W:6,6,4,3,3', 'N:Q752.KJ9.K2.A973 KT4.A84.QJ987.Q8 AJ963.Q6.AT6.JT5 8.T7532.543.K642 ♣,♦,♥,♠,NT;N:9,8,8,11,11;E:2,5,5,2,2;S:9,8,7,11,10;W:2,5,5,2,2', 'N:KQJT2.Q76.T8.Q42 A86.KT2.7643.963 43.AJ983.K5.AT87 975.54.AQJ92.KJ5 ♣,♦,♥,♠,NT;N:9,6,9,9,6;E:4,7,4,4,7;S:9,6,9,9,6;W:4,7,4,4,6', 'N:KT864.632.96.AK8 AJ.AJ8.AT82.J754 72.T97.KJ54.T932 Q953.KQ54.Q73.Q6 ♣,♦,♥,♠,NT;N:4,4,3,5,4;E:9,9,9,8,9;S:4,4,3,5,4;W:9,9,9,8,9', 'N:JT5.AQ.AQT82.983 .J97632.K5.AQJ64 KQ87642.T5.J64.K A93.K84.973.T752 ♣,♦,♥,♠,NT;N:3,10,3,10,6;E:10,3,9,3,7;S:3,9,3,10,6;W:10,3,9,3,7', 'N:QT7432.QJ8.Q.T96 J98.T94.J87.K754 A5.AK76.AT9.QJ32 K6.532.K65432.A8 ♣,♦,♥,♠,NT;N:9,6,9,9,9;E:4,6,4,3,3;S:9,6,9,9,9;W:4,6,4,3,3', 'N:5.KJT752.J63.K73 QT8.Q864.KQT5.A5 KJ9632..9872.Q98 A74.A93.A4.JT642 ♣,♦,♥,♠,NT;N:3,3,4,5,3;E:10,10,9,8,10;S:3,3,4,5,3;W:9,9,8,8,10', 'N:76.QT874.AQ5.AT9 Q94.A92.KT82.764 AT53.KJ.J94.Q853 KJ82.653.763.KJ2 ♣,♦,♥,♠,NT;N:9,8,9,7,8;E:4,5,4,6,5;S:9,7,9,7,8;W:4,5,4,6,5', 'N:Q87652.K5.T875.A J.QJ976.J9.J7653 KT43.4.Q63.KQ842 A9.AT832.AK42.T9 ♣,♦,♥,♠,NT;N:6,7,2,8,6;E:6,6,10,4,4;S:6,7,2,8,6;W:6,6,10,4,4', 'N:AQJ72.983.QJT2.J 83.KT7.A865.QT92 65.A52.K97.87643 KT94.QJ64.43.AK5 ♣,♦,♥,♠,NT;N:5,7,5,7,5;E:7,5,8,5,6;S:5,7,5,7,5;W:7,6,8,5,6', 'N:Q.764.Q82.T86543 J5.QJ953.A9.AJ97 K9764.KT.653.KQ2 AT832.A82.KJT74. ♣,♦,♥,♠,NT;N:4,0,0,2,1;E:9,13,12,11,12;S:4,0,0,2,0;W:9,13,12,11,12', 'N:Q43.2.KT84.AQ874 AK2.KT3.975.JT63 6.AQ764.AQJ62.52 JT9875.J985.3.K9 ♣,♦,♥,♠,NT;N:9,12,10,6,9;E:3,1,3,7,3;S:9,12,9,5,9;W:3,1,3,7,3', 'N:43.J63.AKT43.AJ2 JT765.T952.976.8 AKQ92.Q874..T654 8.AK.QJ852.KQ973 ♣,♦,♥,♠,NT;N:8,7,9,8,10;E:5,6,4,4,3;S:8,7,9,8,10;W:5,6,4,4,3', 'N:T9643.A3.73.9862 Q8.QJ8765.AQ6.J7 K7.K92.K942.AKQ3 AJ52.T4.JT85.T54 ♣,♦,♥,♠,NT;N:9,7,5,9,7;E:4,6,8,4,5;S:9,7,5,9,7;W:4,6,7,3,5', 'N:A72.J97.Q972.K54 63.AK865.K4.A987 JT94.Q.JT5.QJT32 KQ85.T432.A863.6 ♣,♦,♥,♠,NT;N:7,5,2,5,5;E:6,7,11,8,7;S:7,5,2,5,5;W:6,7,11,8,7', 'N:AJT642.KT4.6.KQ2 Q53.J52.KJ3.A943 K9.873.7542.T765 87.AQ96.AQT98.J8 ♣,♦,♥,♠,NT;N:6,4,4,9,4;E:6,9,8,4,7;S:6,4,4,9,4;W:6,9,8,4,7', 'N:T862.KJ.Q52.T873 Q743.T65.KT93.J4 A9.AQ98732.6.Q65 KJ5.4.AJ874.AK92 ♣,♦,♥,♠,NT;N:5,2,8,3,6;E:7,11,5,9,5;S:5,2,8,4,6;W:7,11,5,9,5', 'N:QT82.6.A8.AK9743 64.AKT54.JT95.65 K3.J732.KQ764.T8 AJ975.Q98.32.QJ2 ♣,♦,♥,♠,NT;N:10,8,6,8,7;E:2,5,7,5,4;S:10,8,6,8,8;W:3,5,7,5,5', 'N:AQT8.AJ2.7.T9874 J764.Q963.AT94.K 953.8754.J65.Q62 K2.KT.KQ832.AJ53 ♣,♦,♥,♠,NT;N:5,2,4,4,3;E:7,10,9,9,9;S:5,2,4,4,3;W:8,11,9,9,10', 'N:A6.J987654.J9.K3 QT972.2.732.AJ98 K8.KQ.QT54.Q7642 J543.AT3.AK86.T5 ♣,♦,♥,♠,NT;N:7,5,9,4,5;E:6,7,4,9,7;S:7,5,9,4,5;W:6,7,4,9,7', 'N:T9872.J54.3.KJ85 A6.AT83.KT8.Q972 KQJ5.K6.AQ962.A3 43.Q972.J754.T64 ♣,♦,♥,♠,NT;N:8,9,7,11,9;E:5,4,6,2,4;S:7,9,7,11,9;W:5,4,6,2,4', 'N:AQ2.KQJT.AK.KQ97 KJ964.764.J3.852 83.982.T982.T643 T75.A53.Q7654.AJ ♣,♦,♥,♠,NT;N:10,7,9,6,8;E:3,6,3,7,4;S:10,7,9,6,8;W:3,6,3,7,4', 'N:Q93.A32.72.AQT82 KJT84.Q765.KT6.4 A72.K94.J53.9653 65.JT8.AQ984.KJ7 ♣,♦,♥,♠,NT;N:8,4,4,5,8;E:5,9,8,8,5;S:8,4,4,4,8;W:5,9,8,8,5', 'N:7654.AK6.A54.532 AQ93.Q95.8.AKJ74 J82.J4.KQ762.986 KT.T8732.JT93.QT ♣,♦,♥,♠,NT;N:3,6,4,4,4;E:9,7,9,9,8;S:3,6,4,4,4;W:9,7,9,9,8', 'N:Q5.KQJ94.AQT3.K8 A93.T87.J97.A764 KJ86.A652.62.JT2 T742.3.K854.Q953 ♣,♦,♥,♠,NT;N:7,8,11,9,9;E:6,5,2,4,3;S:7,8,11,9,9;W:6,5,2,4,3', 'N:T973.A.QJ82.9543 J42.982.AK6.T762 A86.KJ764.75.AJ8 KQ5.QT53.T943.KQ ♣,♦,♥,♠,NT;N:7,6,6,7,6;E:6,7,7,6,7;S:7,6,6,7,6;W:6,7,7,6,7', 'N:6543.QT63.Q84.AJ KJ87.A7.KJT.K762 A2.K542.9653.854 QT9.J98.A72.QT93 ♣,♦,♥,♠,NT;N:3,5,6,4,5;E:9,7,7,9,8;S:3,5,6,4,5;W:9,7,7,9,8', 'N:Q974..AK87.AT974 A65.KJ43.432.QJ5 KT.AQT75.Q95.863 J832.9862.JT6.K2 ♣,♦,♥,♠,NT;N:10,10,8,9,10;E:3,3,3,4,3;S:10,10,8,9,10;W:3,3,3,4,3', 'N:AK2.AQJ8.Q62.K92 JT7.9432.43.QJT4 Q85.K.AKT85.8763 9643.T765.J97.A5 ♣,♦,♥,♠,NT;N:10,12,12,11,12;E:3,1,1,2,1;S:10,12,12,11,12;W:3,1,1,2,1', 'N:JT7.9.AKJ6532.T4 Q52.Q865.8.98765 K864.KT43.74.A32 A93.AJ72.QT9.KQJ ♣,♦,♥,♠,NT;N:4,9,4,6,8;E:8,3,8,6,3;S:4,9,5,7,9;W:9,4,8,5,4', 'N:62.Q74.9743.KQ92 AKT4.KJT8.AJ6.75 QJ3.A63.852.J864 9875.952.KQT.AT3 ♣,♦,♥,♠,NT;N:5,4,3,3,4;E:8,9,9,10,9;S:5,4,3,3,4;W:8,9,9,10,9', 'N:KJT.73.K875.AT53 A542.JT8.AQ96.74 Q73.AK6542.T43.K 986.Q9.J2.QJ9862 ♣,♦,♥,♠,NT;N:6,8,9,8,8;E:6,5,4,5,5;S:6,8,7,7,8;W:6,5,4,5,5', 'N:A986.542.AQ54.43 732.Q.KT82.Q8652 K4.AKJ93.J3.AT97 QJT5.T876.976.KJ ♣,♦,♥,♠,NT;N:8,8,10,9,9;E:5,4,3,4,4;S:8,9,10,9,9;W:5,4,3,4,4', 'N:K72.AK7.83.KQT63 J65.J8.AKQJ972.A AQ3.T43.64.J7542 T984.Q9652.T5.98 ♣,♦,♥,♠,NT;N:9,5,6,6,5;E:4,8,7,7,8;S:9,5,6,6,5;W:4,8,7,7,8', 'N:T76.J73.JT8.9876 AK853.4.AK75.KT5 QJ2.A9862.Q32.J4 94.KQT5.964.AQ32 ♣,♦,♥,♠,NT;N:2,2,4,2,2;E:11,11,9,11,10;S:2,2,4,2,2;W:11,11,9,11,10', 'N:93.K652.KQ9742.6 AJ762.94.T8.QJT3 KQ84.AT8.J63.A87 T5.QJ73.A5.K9542 ♣,♦,♥,♠,NT;N:5,10,8,7,7;E:8,3,5,5,5;S:5,10,8,7,7;W:8,3,5,5,5', 'N:87.A.AK8532.9732 AKT.QJ763.T.AKQJ QJ.K52.QJ974.T54 965432.T984.6.86 ♣,♦,♥,♠,NT;N:4,8,2,2,6;E:7,4,10,9,5;S:4,8,2,2,6;W:7,4,10,9,5', 'N:A6.AQ87.A732.T95 KQJ5.962.KQT865. 8742.KJ3.4.AJ643 T93.T54.J9.KQ872 ♣,♦,♥,♠,NT;N:10,5,9,6,7;E:3,7,3,6,5;S:9,5,9,6,7;W:3,7,3,6,5', 'N:AT875.3.K94.Q654 92.Q97652.Q6.JT9 J63.AJT4.875.873 KQ4.K8.AJT32.AK2 ♣,♦,♥,♠,NT;N:6,5,4,7,5;E:7,8,9,6,7;S:6,5,4,7,5;W:7,8,9,6,7', 'N:T7642.53.T4.J962 AKQ3.KT.AJ752.Q5 85.AQJ87.KQ8.T83 J9.9642.963.AK74 ♣,♦,♥,♠,NT;N:4,3,4,5,4;E:9,10,8,8,9;S:4,3,4,5,4;W:9,9,8,8,9', 'N:QJ85.A532.965.93 9.97.KQJ842.K874 KT6.QJT6.T7.AQ65 A7432.K84.A3.JT2 ♣,♦,♥,♠,NT;N:5,4,7,8,6;E:8,8,3,5,7;S:5,4,7,8,6;W:8,8,3,5,7', 'N:985.A73.T985.KQ5 KQ63..AQJ2.AJT73 A.KQJT64.K73.962 JT742.9852.64.84 ♣,♦,♥,♠,NT;N:5,7,9,2,7;E:8,6,4,11,5;S:3,7,8,2,7;W:8,5,4,10,5', 'N:KJ3.Q54.AKQJ4.64 A.AT8.T92.KQJ972 T8752.K62.875.A5 Q964.J973.63.T83 ♣,♦,♥,♠,NT;N:4,9,6,8,6;E:9,4,7,4,5;S:4,9,6,8,6;W:9,4,7,4,5', 'N:J542.A962.T9.A72 AK983.84.KJ6.KT3 T6.53.A873.J9654 Q7.KQJT7.Q542.Q8 ♣,♦,♥,♠,NT;N:6,4,3,3,3;E:7,9,9,9,10;S:6,4,3,3,3;W:7,9,9,9,10', 'N:AJ84.AQ943.T.T95 95.752.652.KQ732 763.KJ6.AJ43.J84 KQT2.T8.KQ987.A6 ♣,♦,♥,♠,NT;N:5,4,8,7,7;E:6,8,5,5,6;S:5,4,8,7,7;W:6,8,5,5,6', 'N:AK6.8.QJ8764.J96 T72.AK652.KT3.A2 QJ43.Q3.52.QT753 985.JT974.A9.K84 ♣,♦,♥,♠,NT;N:7,7,3,6,4;E:6,6,10,6,9;S:7,7,3,6,4;W:6,6,10,7,9', 'N:86.A5.KQJ2.QJT95 AQJT.T842.85.K72 2.KJ76.AT97.8643 K97543.Q93.643.A ♣,♦,♥,♠,NT;N:9,9,6,4,5;E:3,3,7,8,7;S:9,9,6,4,5;W:3,3,7,8,7', 'N:T62.KQJ75.95.764 Q9..AKQJT76.T953 J5.T984.42.KQJ82 AK8743.A632.83.A ♣,♦,♥,♠,NT;N:4,0,5,0,0;E:9,13,8,13,13;S:4,0,5,0,0;W:9,13,8,13,13', 'N:765.9542.KT43.54 JT4.KQ7.Q5.AJ983 Q3.AT63.976.T762 AK982.J8.AJ82.KQ ♣,♦,♥,♠,NT;N:1,3,4,1,1;E:11,10,9,12,11;S:1,3,4,1,1;W:11,10,9,12,12', 'N:K64.K93.Q83.A742 9853.6.AK965.965 AT72.AJT872.J.JT QJ.Q54.T742.KQ83 ♣,♦,♥,♠,NT;N:7,4,10,10,10;E:6,8,2,3,2;S:7,4,10,10,10;W:6,8,2,3,3', 'N:K2.KQ9632.65.765 98753.AT.QT92.A3 AT.75.AKJ743.982 QJ64.J84.8.KQJT4 ♣,♦,♥,♠,NT;N:4,8,7,3,6;E:9,5,5,10,7;S:4,8,7,3,6;W:9,5,5,10,7', 'N:543.AKJ7.A54.K72 J872.T3.QJ983.A5 KQ9.Q9862.7.QT86 AT6.54.KT62.J943 ♣,♦,♥,♠,NT;N:8,5,10,6,7;E:4,8,3,7,4;S:8,5,10,6,7;W:4,8,3,7,4', 'N:KJ96542.A3.Q2.A6 A3.K762.KT853.K8 T.QJ98.AJ74.QT52 Q87.T54.96.J9743 ♣,♦,♥,♠,NT;N:8,8,8,10,8;E:5,5,4,3,3;S:8,8,8,9,8;W:5,5,5,3,3']
This cluster consists of
          7 nodes in total
          7.0 CPU resources in total

deal count: 100 time: 0:00:14.398623
shared connection to 192.168.0.3 closed.

```

### Scale up

Our DDS script computes 50 bridge deals by default - a rather small number - so that the execution time does not get in the way of your following this tutorial.
However, the small size of the sample probably won't benefit from the distribution to the Golem Network.

To see actual profits from such parallelization, increase the `DEAL_COUNT` 10 or 50 times, however, you want.

Then you can run it locally (you can comment out the `runtime_env` argument for `ray.init()` if you want the fastest local execution):

```bash
python3 dds.py
```

And on Golem:

```bash
ray submit golem-cluster.yaml dds.py
```

At some point (typically 100-200 deals tend to be enough), the execution on your Ray on Golem cluster will be visibly faster.

You can find the resulting code in [our repo](https://github.com/golemfactory/ray-on-golem/raw/main/examples/dds-with-ray.py).

## Play around

Everything is set up at this point and you can play around.

You can play with the script and with the cluster config yaml - change the maximum number of nodes, autoscaling speed, etc.

## Stop the cluster

When you are done, it is a good practice to stop the cluster. In the default configuration, it runs on the free testnet, but keeping it running impairs the provider availability for others. On the other hand, when you run on the mainnet, stopping the cluster saves you money.

```python
ray down golem-cluster.yaml --yes
```
