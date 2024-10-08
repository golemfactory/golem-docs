---
title: GPU Provider Installation Guide!
description: Step-by-step instructions for setting up a dedicated GPU provider on the Golem Network.
pageTitle: Install & Run Golem's GPU Provider - Earn GLM by Sharing GPU Power
type: Instructions
---

# Golem GPU Provider: Installation and Configuration Guide

Ready to earn GLM tokens by sharing your GPU's computing power with the Golem Network? This comprehensive guide provides step-by-step instructions for setting up and configuring a dedicated GPU provider node. 

## Introduction

The `gpu-golem-live` project allows you to contribute your GPU resources to the Golem Network. These powerful resources will enable demanding tasks such as artificial intelligence (AI) processing, contributing to a decentralized network for advanced computations.  As a provider, you will be rewarded with GLM tokens for your contribution.

## Prerequisites: Ensuring Your System is Ready

Before starting, check if your hardware meets these requirements:

- **IOMMU Support:** A computer with a motherboard and CPU that supports IOMMU (Input-Output Memory Management Unit) virtualization.
- **Nvidia GPU:** An Nvidia graphics card, at least a 30xx series, with 8 GB or more VRAM.
- **RAM:**  At least the same amount of RAM as your GPU's VRAM, with double the amount recommended.
- **SSD:** An SSD with a minimum capacity of 64 GB, connected via a fast USB interface (USB 3.2 recommended). A high-speed USB flash drive can work but is not recommended.
- **Network:** A stable internet connection with a minimum speed of 100 Mbps (both upload and download), preferably via an RJ45 Ethernet cable.
- **Ethereum Wallet:** An Ethereum wallet to receive your GLM earnings.
- **BIOS Settings:**  Enable VT-d (for Intel CPUs) or SVM (for AMD CPUs) in your computer's BIOS settings.

⚠️ **Important Considerations:**

- **Network Optimization:** For better peer-to-peer connections, consider opening UDP port 11500 on your router.
- **GPU Detection Issues:** If you've enabled virtualization in BIOS but the setup doesn't detect your GPU, try moving it to a different PCIe slot.
- **GPU Usage:** Your GPU might not be in use all the time. It will be active when tasks are assigned.
- **Single GPU Configuration:** The current setup supports one provider node per GPU. Multi-GPU support will be added later.

## Setting up your Golem GPU Provider

### 1. Download and Extract the Image

1. Download the `gpu-golem-live` provider image:
   [Download image](https://gpu-provider.dev.golem.network/golem-gpu-live-latest.img.xz)

```bash
https://gpu-provider.dev.golem.network/golem-gpu-live-latest.img.xz
```

You can also download it using `wget`:

```bash
wget https://gpu-provider.dev.golem.network/golem-gpu-live-latest.img.xz
```
The file is about 2GB.

2. Extract the downloaded `.xz` archive using an archiving tool (7-Zip, The Unarchiver, or your system's default tool) or use these terminal commands:

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

The uncompressed image file (`golem-gpu-live-latest.img`) should be around 8.6 GB.

### 2. Flash the Image to Your SSD

#### Prepare your SSD

1. **Connect the SSD:** Connect your SSD to your computer.
2. **Delete Existing Partitions:** **Delete all existing partitions** on the SSD.

#### Identify the SSD's Path

1. **Linux:**  Run `sudo fdisk -l` to find your SSD (identified by its size) and its path (e.g., `/dev/sdX`).
2. **macOS:** Use `diskutil list` to locate your SSD and its identifier (e.g., `/dev/diskY`).

#### Flash the Image

##### **Using `dd` (recommended)**

**Warning:** Double-check the SSD path before using `dd`, as incorrect usage can cause data loss!

If your extracted image is in your Downloads folder and the SSD is `/dev/sdX`:

```bash
sudo dd if=Downloads/golem-gpu-live-latest.img of=/dev/sdX bs=4M status=progress
```

- Replace `/dev/sdX` with the actual path. 
- `bs=4M` is for faster transfer.
- `status=progress` shows the flashing progress.

##### **Using balenaEtcher (alternative)**

1. **Select Image:** In balenaEtcher, click "Flash from file" and choose `golem-gpu-live-latest.img`.
   - ![Flash from file](/gpu/balena_1.png) 

2. **Select Target:** Click "Select target" and choose your SSD. **Double-check** you've chosen the right drive!
   - ![Select target 1](/gpu/balena_2.png)
   - ![Select target 2](/gpu/balena_3.png)

3. **Flash:** Click "Flash!" to begin. Confirm with "Yes, I'm sure" if prompted.
   - ![Flash!](/gpu/balena_4.png)
   - ![Yes, I'm sure](/gpu/balena_5.png)

4. **Progress:** balenaEtcher will show a progress bar. This can take 5-10 minutes.
   - ![Flashing 1](/gpu/balena_6.png)
   - ![Flashing 2](/gpu/balena_7.png)
   - ![Flashing 3](/gpu/balena_8.png)
   - ![Flashing 4](/gpu/balena_9.png)
   - ![Flashing 5](/gpu/balena_10.png)

### 3. Boot from the SSD

1. **Connect the SSD:** Make sure the SSD is connected to your computer.
2. **Reboot:** Restart your computer.
3. **Boot Menu:** Enter your BIOS/UEFI boot menu (usually `F12`, `F2`, `Esc`, or `Del`).
4. **Select SSD:** Select the SSD with `gpu-golem-live`.  **Make sure to choose UEFI OS mode**.

   - ![Bios booting](/gpu/bios_1.png)

#### Setting the SSD as the Default Boot Device (Optional)

To always boot from the SSD when connected:

1. **Access BIOS:** Enter BIOS settings during startup (key varies by motherboard, look for `F2`, `Del`, `Esc`).
2. **Boot Order:** Find the "Boot" or "Boot Order" section.
3. **Prioritize SSD:**  Make the SSD the first boot option.
4. **Save and Exit:** Save your changes and exit BIOS.

   - ![Bios settings 2](/gpu/bios_2.png)

### 4. Configure the GPU Provider

1. **Select OS:** Press `Enter` to choose **GOLEM GPU Live**.
   - ![Bios settings 3](/gpu/bios_3.png)
2. **Welcome:** Click "OK."
   - ![Setup GPU Golem Live 1](/gpu/setup_1.png)
3. **Terms of Use:** Read and accept by selecting "YES".
   - ![Setup GPU Golem Live 2](/gpu/setup_2.png)
4. **Persistent Storage:** Select a partition on your SSD for storing provider data.
   - ![Setup GPU Golem Live 3](/gpu/setup_3.png)
5. **Password:**  A random password will be generated. **Write it down securely** for future SSH access.
   - ![Setup GPU Golem Live 4](/gpu/setup_4.png)
6. **Network Configuration:** Write down the IP address shown (needed for SSH).
   - ![Setup GPU Golem Live 5](/gpu/setup_5.png)
7. **Ethereum Wallet:** Enter your wallet address to receive your GLM earnings.
   - ![Setup GPU Golem Live 6](/gpu/setup_6.png)
8. **Set Price:** Enter your desired hourly rate in GLM.
   - ![Setup GPU Golem Live 7](/gpu/setup_7.png)
9. **GPU Selection:** Choose the GPU you want to use with Golem.
   - ![Setup GPU Golem Live 9](/gpu/setup_9.png)
   - ![Setup GPU Golem Live 10](/gpu/setup_10.png)
10. **Confirmation:** Click "OK" to finalize. Your computer will restart, and the provider will start running (your monitor might go blank, this is normal).

    - ![Setup GPU Golem Live - Done 1](/gpu/setup_11.png)
    - ![Setup GPU Golem Live - Done 2](/gpu/setup_12.png)
    - ![Setup GPU Golem Live - Done 3](/gpu/setup_13.png)

### 5. Monitoring Your GPU Provider

Your provider is now active on the Golem Network! To check its status and earnings, visit the Golem Network Stats page: [https://stats.golem.network/network/providers/online](https://stats.golem.network/network/providers/online)

Search for your provider using its randomly generated name ("Node name" in the configuration summary).

## Frequently Asked Questions

### How to connect to the provider?

Connect via SSH:

```bash
ssh golem@<provider_ip_address>
```

Use the IP from step 6 and the password from step 5.

---

### How to check the provider's name?

1. Connect to your provider via SSH.
2. Run `golemsp settings show`.
3. Look for the "node name" - that's your provider's name on the [Golem Network Stats page](https://stats.golem.network/network/providers/online).

---

### How to change the provider's name?

1. Connect to your provider via SSH.
2. Run:

   ```bash
   golemsp settings set --node-name '<new_node_name>'
   ```

---

### How to change the wallet address?

1. Connect to your provider via SSH.
2. Run:

   ```bash
   golemsp settings set --account <new_wallet_address>
   ```

---

### How to change the hourly rate?

1. Connect to your provider via SSH.
2. Convert your desired hourly rate to a rate per second (divide by 3600). For example, for 0.25 GLM per hour:

   ```
   0.25 GLM/h / 3600 seconds/hour = 0.00006944444444444444 GLM per second
   ```

3. Run:

   ```bash
   ya-provider preset update --name vm-nvidia --price duration=0.00006944444444444444 --no-interactive
   ```

4. Activate the changes:

   ```bash
   ya-provider preset activate vm-nvidia
   ```

---

### How to download logs from the provider?

1. Open your local terminal (**not** via SSH).
2. Run:

   ```bash
   scp golem@<your_provider's_ip>:/home/golem/golemwz.log golemwz.log
   scp golem@<your_provider's_ip>:/home/golem/.local/share/yagna/yagna_rCURRENT.log yagna_rCURRENT.log
   ```

   Enter your SSH password when asked. The logs will be downloaded to your current directory.

---

Need more help? Join us on [Discord](https://discord.gg/golem)!


