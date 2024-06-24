---
title: Installation instructions - gpu-golem-live
hide:
  - navigation
description: gpu-golem-live project documentation
type: noindex
---

# ⚙️ Installation instructions - gpu-golem-live

You are invited to join the `gpu-golem-live` experimental project, an initiative to make GPU hardware resources available within the Golem Network. GPU resources will contribute to perform artificial intelligence (AI) tasks and more . As part of your participation in the network, you will receive GLM tokens as compensation for the computing services you provide.

## Prerequisites

To properly use the service as a provider in `gpu-golem-live`, it is necessary to meet the following hardware requirements:

- A computer equipped with a motherboard and CPU with support for IOMMU (Input-Output Memory Management Unit) virtualization.
- Nvidia graphics card at least series 30xx with 8 GB VRAM.
- RAM - at least the same amount as VRAM, 2x more recommended.
- SSD with a minimum capacity of 64 GB, connected via fast USB (USB 3.2 recommended). Alternatively, you can use a high-speed USB Flash Drive (although this is not recommended).
- A stable Internet connection with a minimum of 100 Mbps. (for both downloading and uploading data), via an RJ45-type network cable (Ethernet).
- Own ETH wallet
- VT-d (CPU-related) function enabled in BIOS

⚠️ **Important**!

- To improve the quality of P2P connections, it is recommended to open UDP port 11500.
- It is necessary to enable in the BIOS: VT/VT-d (Intel) and SVM (AMD). If these options are active and the wizard still doesn't detect the card, you can try moving the card to another PCIe slot.
- The GPU may not be in use all the time, but it is sufficient if the provider is connected and already earning. The GPU will operate when tasks are assigned. During beta testing, a fixed price is applicable. After the software is launched for all users, everyone will be able to determine their own pricing for services.
- Currently, we only support the configuration of one provider + one GPU. In the future, we plan to support multiple GPUs. Any combinations users want to try for running on multiple GPUs are at their own risk.

By joining `gpu-golem-live`, you support AI infrastructure and manage your hardware resources flexibly, while getting the benefits of GLM tokens. If you have all of the above, you are welcome to join the project and work together for the development of artificial intelligence.

Learn more at:
[➜ golem-gpu-live @ GitHub](https://github.com/golemfactory/golem-gpu-live)

## 1. Download and unzip image

In the first step, download and unzip the `gpu-golem-live` provider image.

To do this, click on the link below or copy the address and paste it in your web browser. The download will begin.

[Download image](https://gpu-provider.dev.golem.network/golem-gpu-live-latest.img.xz)

```bash
https://gpu-provider.dev.golem.network/golem-gpu-live-latest.img.xz
```

Alternatively, you can download the file using a terminal by typing the command:

```bash
wget https://gpu-provider.dev.golem.network/golem-gpu-live-latest.img.xz
```

The file takes about 2 GB and should download in about 3 minutes (on a 100 Mbps connection).

Once the download is complete, unzip the file with any tool (such as the default archiving tool, The Unarchiver or 7-Zip) or use the command prompt:

{% tabs %}
{% tab label="Linux" %}

```bash
xz -d golem-gpu-live-latest.img.xz
```

{% /tab %}
{% tab label="Mac" %}

```bash
gunzip golem-gpu-live-latest.img.xz
```

{% /tab %}
{% /tabs %}

Done! The unzipped file should take up about 8.6 GB.

## 2. Flash image to SSD

In the second step, you need to flash the unzipped `gpu-golem-live` image to an external SSD. To do this, you can use free software (such as balenaEtcher) or a command in the terminal.

You can use dd to save the extracted image to the SSD. Connect the SSD to your computer and then check its path on your system using `sudo fdisk -l` (Linux) or `diskutil list` (macOS). Assuming the SSD is referred to on the system as `/dev/disk4`, and the image file (named `golem-gpu-live-latest.img`) is in the `/Downloads` directory you can use:

```bash
sudo dd if=Downloads/golem-gpu-live-latest.img of=/dev/disk4
```

Alternatively, you can use the previously mentioned [balenaEtcher](https://etcher.balena.io/#download-etcher) tool.
Download the appropriate software version for your system and run the wizard.

⚠️ **Important**! Before recording the image, it is necessary to delete all partitions that were previously on the disk.

1.  **Select a file from disk** - click on the `Flash from file` button to select a previously unzipped `gpu-golem-live` image file.

    ![Flash from file](/gpu/balena_1.png)

2.  **Select SSD** - click on the `Select target` button to select the SSD, which is the place where the `gpu-golem-live` image will be installed.

    ![Select target 1](/gpu/balena_2.png)
    ![Select target 2](/gpu/balena_3.png)

3.  **Flash the image!** - Click on the `Flash!` button to start the flashing process

    ![Flash!](/gpu/balena_4.png)

    ⚠️ For larger capacity SSDs, you may see additional confirmation - click `Yes, I'm sure`.

    ![Yes, I'm sure](/gpu/balena_5.png)

4.  **Flashing** - in the last step you need to be patient. Flashing the video, depending on the speed of the SSD, will take from 5 to 10 minutes. While flashing, you will be able to watch the progression in real time.

    ![Flashing 1](/gpu/balena_6.png)

    ![Flashing 2](/gpu/balena_7.png)

    ![Flashing 3](/gpu/balena_8.png)

    ![Flashing 4](/gpu/balena_9.png)

    ![Flashing 5](/gpu/balena_10.png)

Done! Go to the next step.

## 3. Boot the image from disk

It's time to launch a `gpu-golem-live` provider!

Connect the SSD with the image to your computer (if you disconnected it before or used another device to install the image) and reboot the system. When booting, select the SSD where `gpu-golem-live` is installed.

⚠️ Always select a drive in UEFI OS mode.

![Bios booting](/gpu/bios_1.png)

Select the SSD drive (in the case above it is: WD My Passport 265F2007) on which `gpu-golem-live` is installed and proceed to configure the GPU provider.

**Optional step - setting the SSD as the default drive in the computer**

While the computer is booting, go to the BIOS settings. Depending on the motherboard, you can enter the BIOS settings by pressing on the keyboard:

- ASRock: DEL or F2
- ASUS: DEL or F2
- Acer: DEL or F2
- Dell: F12 or F2
- ECS: DEL
- Gigabyte DEL or F2
- HP: F10
- Lenovo: F2 or Fn + F2 (laptops), F1 (desktops), Enter + F1 (ThinkPads)
- MSI: DEL
- Microsoft Surface: press and hold the Power and Volume Up buttons
- Samsung: F2
- Toshiba: F2

In the BIOS settings (for the MSI motherboard as an example), set the boot order so that the SSD is in the first position (before the disk with the system). This will cause the `gpu-golem-live` provider to boot first (provided it is connected to the USB port).

![Bios settings 2](/gpu/bios_2.png)

## 4. GPU provider configuration

In the next step you will learn how to configure the `gpu-golem-live` provider. Remember that the configuration process is done only once, at the beginning and you can make any modifications later (see [FAQ](#frequently-asked-questions-2)).

1.  **Select OS** - click `Enter` to confirm the selection **GOLEM GPU Live**

    ![Bios settings 3](/gpu/bios_3.png)

2.  **Welcome to the wizard!** - Click `OK` to proceed.

    ![Setup GPU Golem Live 1](/gpu/setup_1.png)

3.  **Terms of Use Acceptance** - select `YES` to confirm the terms of use. You can read the whole thing at your convenience at: [https://docs.golem.network/docs/golem/terms](https://docs.golem.network/docs/golem/terms)

    ![Setup GPU Golem Live 2](/gpu/setup_2.png)

4.  **Persistent Storage Configuration** - select a storage partition. A list of available partitions will be displayed and you will be able to select one of them to use as persistent storage. The selected storage partition will be used to store data related to `gpu-golem-live`.

    ![Setup GPU Golem Live 3](/gpu/setup_3.png)

5.  **Password Setup** - in the next step a password will be generated, which should be saved securely. You will need the password to connect to `gpu-golem-live` via SSH in the future.

    ![Setup GPU Golem Live 4](/gpu/setup_4.png)

6.  **Network Configuration** - the next step will display the IP address assigned to the provider to `gpu-golem-live`. Write it down to use in the future for SSH connection.

    ![Setup GPU Golem Live 5](/gpu/setup_5.png)

7.  **GLM (Golem Network Token) Configuration** - in the next step, enter the address of your own wallet.

    ![Setup GPU Golem Live 6](/gpu/setup_6.png)

8.  **Set your price** - in the following step, set the hourly rate (in GLM). This value is necessary for participation in the Golem network and set prices for sharing resources.

    _GLM per hour means how much GLM you will receive for a full hour of the HW usage._

    ![Setup GPU Golem Live 7](/gpu/setup_7.png)

9.  **GPU Selection and Configuration** - in the next step, the wizard will identify GPUs and allow you to select one of them. The selected GPU will be configured to share resources on the Golem network.

    ![Setup GPU Golem Live 9](/gpu/setup_9.png)

    ![Setup GPU Golem Live 10](/gpu/setup_10.png)

    Confirm `OK` to complete the configuration process.

10. **That's it!**

    ![Setup GPU Golem Live - Done 1](/gpu/setup_11.png)

    The gpu-golem-live provider has been configured! Confirm `OK` to complete the process.

    The computer will restart:

    ![Setup GPU Golem Live - Done 2](/gpu/setup_12.png)
    ![Setup GPU Golem Live - Done 3](/gpu/setup_13.png)

    ...and the provider `gpu-golem-live` will "take control" of its operation. Don't worry if the monitor screen goes out (goes black) and shuts down. This is a desirable situation.

    As of this moment, your `gpu-golem-live` provider provides resources on the Golem Network. Thank you for your support! ❤️

## 5. Monitoring

Once `gpu-golem-live` is running and configured, its resources will be made available on the Golem Network. To check the current status of the provider along with the results go to: [https://stats.golem.network/network/providers/online](https://stats.golem.network/network/providers/online) and search for it by typing the name. The name of the provider is generated randomly and can be seen after the configuration (in the previous screen shot as `Node name`):

_For example_:

![Golem Node Name](/gpu/nodename.png)

Find your provider online:

![Golem Network Stats 1](/gpu/monitoring_1.png)

And monitor your earnings:

![Golem Network Stats 2](/gpu/monitoring_2.png)

## Frequently Asked Questions

**How do I connect to the provider?**

To connect to your own `gpu-golem-live` provider you can use SSH. To do this use the command in the terminal:

```bash
ssh golem@ip
```

For example: `ssh golem@10.92.1.32`.

As IP, use the address that was displayed in the 6th step during the configuration of the provider. For authorization, use the password that was generated in step 5 during configuration.

---

**How to check the name of the provider?**

First, log in via SSH to your provider and use the command in the terminal:

```bash
golemsp settings show
```

And check the value for the item "node name". This is the name of your provider, which you can find at [https://stats.golem.network/network/providers/online](https://stats.golem.network/network/providers/online)

---

**How to change the name of the provider?**

First, log in via SSH to your provider and use the command in the terminal:

```bash
golemsp settings set --node-name 'node name'
```

Where `node name` is the name for your provider.

---

**How to change your wallet address?**

First, log in via SSH to your provider and use the command in the terminal:

```bash
golemsp settings set --account 0x00000...
```

After the `--account` value, enter the address of your wallet.

---

**How to change the hourly rate?**

First, log in via SSH to your provider and use the command in the terminal:

```bash
ya-provider preset update --name vm-nvidia --price duration=0.00003
```

Go through the wizard, where you select `vm-nvidia` and linear and set the appropriate rates. Note that the value here is expressed in seconds. To convert to GLM / h simply multiply the value times 3600. For example:

- 0.000006944444444444444 \* 3600 = 0.025 GLM /h
- 0.00006944444444444444 \* 3600 = 0.25 GLM /h

Finally, activate the changes with the command:

```bash
ya-provider preset activate vm-nvidia
```

---

**How to download logs from the provider?**

First, open your terminal (don't connect to ssh) and run the commands below:

```bash
scp golem@[your provider's ip]:/home/golem/golemwz.log golemwz.log
scp golem@[your provider's ip]:/home/golem/.local/share/yagna/yagna_rCURRENT.log yagna_rCURRENT.log
```

For example: `scp golem@10.92.1.32:/home/golem/golemwz.log golemwz.log`.

To download the logs, you will need to provide a password. The files will download to the path where you currently are.

---

Do you have additional questions? Join [➜ https://discord.gg/golem](https://discord.gg/golem)
