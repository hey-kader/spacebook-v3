import React from 'react'
import Button from 'react-bootstrap/Button'
import { useWeb3React } from "@web3-react/core"
import { injected } from "./wallet/Connectors"

export default function Home () {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()
    
    async function connect () {
        try {
            await activate (injected)
        }
        catch (ex) {
            console.log(ex)
        }
    }

    async function disconnect () {
        try {
            deactivate()
        } catch (ex) {
            console.log(ex)
        }
    }

    return (
        <div>
            <Button onClick={connect}>connect</Button>
            {active ? <span>connected with {account}</span>:<span>not connected</span>}
            <Button onClick={disconnect}>disconnect</Button>
        </div>
    )
}
