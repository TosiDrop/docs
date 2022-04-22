---
sidebar_label: 'Security'
sidebar_position: 2
---

A main part of the protocol will be using vaults.

Vaults are non-trusted and collateralized and any user can become a Vault by providing collateral. This means as a user, you can freely choose any Vault you like or be your own Vault. You don’t have to trust anyone else if you want to be extra cautious.

The correct behavior of Vaults is enforced by the bridge. Specifically, Vaults must prove correct behavior to the BTC-Relay component - a Bitcoin SPV client implemented directly on top of the bridge. If a Vault tries to steal BTC, this will be automatically detected and the Vault will lose its collateral - and users will be reimbursed using this collateral at a beneficial rate because Vaults are overcollateralized from the start.

The secondary responsibility of a Vault is to monitor both Bitcoin and the bridge to ensure that the BTC-Relay stays up to date with the Bitcoin mainchain by relaying Bitcoin block headers. BTC-Relay is self-healing and automatically detects and recovers from Bitcoin forks.

To issue anetaBTC, the user will be required to pay a security deposit in ERG, hence why the vault sends locked ERG collateral to the anetaBTC bridge. This is a security measure to incentivize genuine activity and prevent griefing of vaults. The ERG security deposit will be released back to the user for completed transactions.

<!-- Source: xchain whitepaper  -->
