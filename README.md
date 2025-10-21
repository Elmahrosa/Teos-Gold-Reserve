# 🪙 TEOS Gold Reserve ($TGR)

A Solana-based **gold-backed digital asset** protocol deployed by **Elmahrosa International** under the **TEOS Egypt** ecosystem.

> “The Gold of the Pharaohs — tokenized for the new age.”

## 🌍 Overview

**$TEOS Private Contribution Pool** is a decentralized contribution protocol built on **Solana (Anchor framework)** that empowers verified holders to participate in the *Pioneers Program*.  

**Every verified contributor:**
- 💰 Contributes **$50 in SOL**
- 🪙 Receives **10,000 $TEOS**
- ⚡ Gains **exclusive access**

![GitHub Repo stars](https://img.shields.io/github/stars/Elmahrosa/TEOS-Pioneers?style=for-the-badge&logo=github)  
![GitHub License](https://img.shields.io/github/license/Elmahrosa/TEOS-Pioneers?style=for-the-badge&color=gold)  
![Solana Program](https://img.shields.io/badge/Anchor%20Smart%20Contract-Rust-9945FF?style=for-the-badge&logo=rust)  
![Frontend](https://img.shields.io/badge/Frontend-Vite%20+%20Tailwind-38BDF8?style=for-the-badge&logo=react)  
![Backend](https://img.shields.io/badge/Backend-Flask%20API-000000?style=for-the-badge&logo=python)  
![Network](https://img.shields.io/badge/Network-Solana%20Devnet-00FFA3?style=for-the-badge&logo=solana)  

---

## 🌍 Overview
The **$TEOS Private Contribution Pool** is a decentralized contribution system built on **Solana** and powered by **Anchor**, enabling verified holders to join the *Pioneers Program* by contributing SOL and receiving $TEOS tokens in return.  

Each verified contributor:
- Pays **50 USD worth of SOL**
- Receives **10,000 $TEOS**
- Gains access to the **Pioneers-only trading pool**

---

## ⚙️ Architecture

| Layer | Description |
|-------|--------------|
| **Smart Contract (Rust + Anchor)** | Handles SOL contributions, whitelisting, and locked reserve distribution. |
| **Frontend (Vite + Tailwind + shadcn/ui)** | Provides wallet connection via Phantom and secure contribution flow. |
| **Backend (Flask + SQLite/PostgreSQL)** | Tracks contributions, whitelisted users, and synchronization with Solscan. |

---

## 🔩 Technical Highlights

### 📜 Anchor Contract Structure
- **Program Derived Address (PDA)**:  
  ```rust
  let (pool_pda, bump) = Pubkey::find_program_address(&[b"teos_pool"], program_id);


## 🌍 Vision

Tokenize real gold holdings into on-chain assets that contributors can **mint, hold, redeem, or audit** — with full civic transparency and UID-bound access.

---

## ⚙️ Architecture

- **Smart Contract:** Solana Anchor Program for mint/burn logic and reserve sync  
- **Backend:** Node.js API for KYC, redemption, and reserve updates  
- **Frontend:** React + Tailwind + shadcn/ui (Vercel)  
- **Payments Accepted:** $ERT, $TEOS, SOL

---

## 🪙 Token Specs

| Field             | Value                          |
|------------------|----------------------------------|
| Name             | TEOS Gold Reserve               |
| Symbol           | $TGR                            |
| Network          | Solana SPL                      |
| Backing          | 1 gram physical gold per token  |
| Mint Logic       | 1:1 ratio with verified reserve |
| Redemption       | Physical gold or $ERT equivalent|

---

## 🔧 Smart Contract Functions

```rust
initialize_reserve()              // Set up reserve vault
mint_tgr(user, amount)            // Mint TGR to UID-bound wallet
burn_tgr(user, amount)            // Burn TGR for redemption
update_reserve(auditor_data)      // Sync reserve state
get_reserve_state()               // View current reserve

---

