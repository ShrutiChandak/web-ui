import React from "react";

import Maintainagentedit from './Maintainagentedit.js';
/*
const MOCK_TABLE_DATA = [
    {
        agent_id: 'DEV63016760',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename1',
        group: '1',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016761',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename11',
        group: '2',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016762',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename',
        group: '3',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016763',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename',
        group: '4',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016764',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename',
        group: '1',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016765',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename',
        group: '2',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016766',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename',
        group: '3',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016767',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename',
        group: '4',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016768',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename',
        group: '1',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016769',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename',
        group: '2',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016770',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename',
        group: '3',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016771',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename',
        group: '4',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016772',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename',
        group: '1',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    },
    {
        agent_id: 'DEV63016773',
        gateway: 'https://avipocsubdomain.domainname.ext/pagename',
        group: '2',
        oauth_provider: 'https://avipocsubdomain.domainname.ext/pagename',
        zone: 'https://avipocsubdomain.domainname.ext/pagename',
        subscription: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_host: 'https://avipocsubdomain.domainname.ext/pagename',
        remote_port: 'https://avipocsubdomain.domainname.ext/pagename'
    }
];*/

export default class Maintainagentupgrade extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            newTableData: [],
            viewTable: true,
            editItemData: {},
            searchString: '',
            showTableInit: false
        }
    }

    componentDidMount() {
        this.handleDataTable(false)
    }

    handleDataTable(preserveState) {
        let technicalTableData = [];
        fetch(this.props.baseUrl + '/listGateways?user_id=' + this.props.userId, { // Get gateways this.props.baseUrl+'/listGateways?user_id='+this.props.userId
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': this.props.authToken
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    response.json().then((respData) => {
                        let gateways = respData.data
                        if (gateways === null) {
                            gateways = []
                        }
                        /*  gateways = [
                             {
                                 "gatewayId": "Gateway-10afc420-d8ad-41ec-8be6-6f723e6fb18a",
                                 "userId": "212712078",
                                 "gatewayPort": "8080",
                                 "zone": "b3a2e606-eaa8-4d3c-aadc-c27f12260a1b",
                                 "serviceUrl": "https://b3a2e606-eaa8-4d3c-aadc-c27f12260a1b.run.aws-usw02-dev.ice.predix.io",
                                 "admToken": "YWRtaW46WUo1NVBpWUkwWXpZcmpFQjVsc0dNNGdOcVRTSDlwS1l5RFJXcldOTElwSjA0TlBJM1M=",
                                 "hostUrl": "wss://gateway-url/agent",
                                 "env": 'local'
                             },
                             {
                                 "gatewayId": "Gateway-d4b7844c-f9b2-4ab3-bab3-592b8ca1629d",
                                 "userId": "212712078",
                                 "gatewayPort": "8080",
                                 "zone": "b3a2e606-eaa8-4d3c-aadc-c27f12260a1d",
                                 "serviceUrl": "https://b3a2e606-eaa8-4d3c-aadc-c27f12260a1b.run.aws-usw02-dev.ice.predix.io",
                                 "admToken": "YWRtaW46WUo1NVBpWUkwWXpZcmpFQjVsc0dNNGdOcVRTSDlwS1l5RFJXcldOTElwSjA0TlBJM1M=",
                                 "hostUrl": "wss://gateway-url/agent",
                                 "env": 'local'
                             }
                         ]; */

                        if (gateways.length > 0) {
                            for (let gateway of gateways) {
                                let prepareData = {};
                                prepareData.agent_id = '';
                                prepareData.serverId = '';
                                prepareData.clientId = '';
                                prepareData.gatewayId = gateway.gatewayId;
                                prepareData.targetId = '';
                                prepareData.userId = gateway.userId;
                                prepareData.uaaClientId = '';
                                prepareData.uaaClientSecret = '';
                                prepareData.duration = '';
                                prepareData.gateway = gateway.hostUrl;
                                prepareData.hostUrl = gateway.hostUrl;
                                prepareData.localPort = '';
                                prepareData.group = '';
                                prepareData.oauth_provider = '';
                                prepareData.zone = gateway.zone;
                                prepareData.subscription = gateway.gatewayId;
                                prepareData.remote_port = '';
                                prepareData.remote_host = '';
                                prepareData.agentMode = '1';
                                prepareData.environment = gateway.env;
                                prepareData.gatewayPort = gateway.gatewayPort;
                                prepareData.serviceUrl = gateway.serviceUrl;
                                prepareData.admToken = gateway.admToken;
                                technicalTableData.push(prepareData);
                            }
                        }

                        fetch(this.props.baseUrl + '/listServers?user_id=' + this.props.userId, { // Get gateways this.props.baseUrl+'/listGateways?user_id='+this.props.userId
                            method: 'GET',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': this.props.authToken
                            }
                        })
                            .then((response) => {
                                if (response.status === 200) {
                                    response.json().then((respData) => {
                                        let servers = respData.data
                                        if (servers === null) {
                                            servers = []
                                        }
                                        /*   servers = [
                                              {
                                                  "serverId": "Server-56ca9bb6-62ee-4a41-88bd-107d20ceed30",
                                                  "gatewayId": "Gateway-16450058-e7e3-4ac2-9315-5fa93afaf709",
                                                  "userId": "212712078",
                                                  "zone": "b3a2e606-eaa8-4d3c-aadc-c27f12260a1b",
                                                  "serviceUrl": "https://service-url",
                                                  "hostUrl": "wss://gateway-url/agent",
                                                  "agentId": "xbdhfg",
                                                  "groupId": "ec-test",
                                                  "uaaUrl": "https://uaa-url",
                                                  "uaaClientId": "ec-test",
                                                  "uaaClientSecret": "ec-test",
                                                  "duration": 3000,
                                                  "remoteHost": "localhost",
                                                  "remotePort": "5432",
                                                  "plugin": null
                                              },
                                              {
                                                  "serverId": "Server-849d04cc-2f81-413d-a269-5402960fbd8e",
                                                  "gatewayId": "Gateway-16450058-e7e3-4ac2-9315-5fa93afaf709",
                                                  "userId": "212712078",
                                                  "zone": "b3a2e606-eaa8-4d3c-aadc-c27f12260a1b",
                                                  "serviceUrl": "https://service-url",
                                                  "hostUrl": "wss://gateway-url/agent",
                                                  "agentId": "xbdhfg",
                                                  "groupId": "ec-test",
                                                  "uaaUrl": "https://uaa-url",
                                                  "uaaClientId": "ec-test",
                                                  "uaaClientSecret": "ec-test",
                                                  "duration": 3000,
                                                  "remoteHost": "localhost",
                                                  "remotePort": "5432",
                                                  "plugin": null
                                              }
                                          ]; */

                                        if (servers.length > 0) {
                                            for (let server of servers) {
                                                let prepareData = {};
                                                prepareData.agent_id = server.agentId;
                                                prepareData.serverId = server.serverId;
                                                prepareData.gatewayId = server.gatewayId;
                                                prepareData.clientId = '';
                                                prepareData.userId = server.userId;
                                                prepareData.targetId = '';
                                                prepareData.uaaClientId = server.uaaClientId;
                                                prepareData.uaaClientSecret = server.uaaClientSecret;
                                                prepareData.duration = server.duration.toString();
                                                prepareData.gateway = server.hostUrl;
                                                prepareData.hostUrl = server.hostUrl;
                                                prepareData.localPort = '';
                                                prepareData.group = server.groupId;
                                                prepareData.oauth_provider = server.uaaUrl;
                                                prepareData.zone = server.zone;
                                                prepareData.subscription = server.serverId;
                                                prepareData.remote_port = server.remotePort;
                                                prepareData.remote_host = server.remoteHost;
                                                prepareData.agentMode = '2';
                                                prepareData.environment = '';
                                                prepareData.gatewayPort = '';
                                                prepareData.serviceUrl = server.serviceUrl;
                                                prepareData.admToken = '';
                                                technicalTableData.push(prepareData);
                                            }
                                        }

                                        fetch(this.props.baseUrl + '/listClients?user_id=' + this.props.userId, { // Get gateways this.props.baseUrl+'/listGateways?user_id='+this.props.userId
                                            method: 'GET',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json',
                                                'Authorization': this.props.authToken
                                            }
                                        })
                                            .then((response) => {
                                                if (response.status === 200) {
                                                    response.json().then((respData) => {
                                                        let clients = respData.data
                                                        if (clients === null) {
                                                            clients = []
                                                        }
                                                        /*  clients = [
                                                             {
                                                                 "clientId": "Client-1b95c319-aa6c-44ba-8c2f-2b1764efe697",
                                                                 "gatewayId": "Gateway-d4b7844c-f9b2-4ab3-bab3-592b8ca1629d",
                                                                 "userId": "212712078",
                                                                 "hostUrl": "wss://gateway-url/agent",
                                                                 "agentId": "hdsvhe",
                                                                 "targetId": "dhvhye",
                                                                 "groupId": "ec-test",
                                                                 "uaaUrl": "https://url.predix.io/token",
                                                                 "uaaClientId": "ec-test",
                                                                 "uaaClientSecret": "ec-test",
                                                                 "duration": 3000,
                                                                 "localPort": "7999",
                                                                 "plugin": null
                                                             },
                                                             {
                                                                 "clientId": "Client-45a222d9-50fa-48c8-a7ec-ec700a1ce44f",
                                                                 "gatewayId": "Gateway-16450058-e7e3-4ac2-9315-5fa93afaf709",
                                                                 "userId": "212712078",
                                                                 "hostUrl": "wss://gateway-url/agent",
                                                                 "agentId": "hdsvhe",
                                                                 "targetId": "dhvhye",
                                                                 "groupId": "ec-test",
                                                                 "uaaUrl": "https://url.predix.io/token",
                                                                 "uaaClientId": "ec-test",
                                                                 "uaaClientSecret": "ec-test",
                                                                 "duration": 3000,
                                                                 "localPort": "7999",
                                                                 "plugin": null
                                                             }
                                                         ]; */

                                                        for (let client of clients) {
                                                            let prepareData = {};
                                                            prepareData.agent_id = client.agentId;
                                                            prepareData.serverId = '';
                                                            prepareData.clientId = client.clientId;
                                                            prepareData.userId = client.userId;
                                                            prepareData.gatewayId = client.gatewayId;
                                                            prepareData.targetId = client.targetId;
                                                            prepareData.uaaClientId = client.uaaClientId;
                                                            prepareData.uaaClientSecret = client.uaaClientSecret;
                                                            prepareData.duration = client.duration.toString();
                                                            prepareData.gateway = client.hostUrl;
                                                            prepareData.hostUrl = client.hostUrl;
                                                            prepareData.localPort = client.localPort;
                                                            prepareData.group = client.groupId;
                                                            prepareData.oauth_provider = client.uaaUrl;
                                                            prepareData.zone = '';
                                                            prepareData.subscription = client.clientId;
                                                            prepareData.remote_port = '';
                                                            prepareData.remote_host = '';
                                                            prepareData.agentMode = '3';
                                                            prepareData.environment = '';
                                                            prepareData.gatewayPort = '';
                                                            prepareData.serviceUrl = '';
                                                            prepareData.admToken = '';
                                                            technicalTableData.push(prepareData);
                                                        }
                                                        this.generateTableStructure(technicalTableData, preserveState);
                                                        this.setState({
                                                            tableData: technicalTableData
                                                        });
                                                    })
                                                }
                                                else {
                                                    //this.showGlobalMessage('Oops! There is an error', 'alert-danger');
                                                    //console.log('Looks like there was a problem. Status Code: ' + response.status);
                                                    //this.showAjaxBusy(false);
                                                }
                                            })
                                    })
                                }
                                else {
                                    //this.showGlobalMessage('Oops! There is an error', 'alert-danger');
                                    //console.log('Looks like there was a problem. Status Code: ' + response.status);
                                    //this.showAjaxBusy(false);
                                }
                            })
                    })
                }
                else {
                    //this.showGlobalMessage('Oops! There is an error', 'alert-danger');
                    //console.log('Looks like there was a problem. Status Code: ' + response.status);
                    //this.showAjaxBusy(false);
                }
            })
    }



    generateTableStructure(technicalTableData, preserveState) {
        let tableData = technicalTableData;
        let newTableData = [];
        for (let dataObj of tableData) {
            let newDataObj = {};
            newDataObj.agent_id = dataObj.agent_id;
            newDataObj.serverId = dataObj.serverId;
            newDataObj.clientId = dataObj.clientId;
            newDataObj.userId = dataObj.userId;
            newDataObj.gatewayId = dataObj.gatewayId;
            newDataObj.targetId = dataObj.targetId;
            newDataObj.agentMode = dataObj.agentMode;
            newDataObj.uaaClientId = dataObj.uaaClientId;
            newDataObj.uaaClientSecret = dataObj.uaaClientSecret;
            newDataObj.localPort = dataObj.localPort;
            newDataObj.duration = dataObj.duration;
            newDataObj.group = dataObj.group;
            newDataObj.environment = dataObj.environment;
            newDataObj.gatewayPort = dataObj.gatewayPort;
            newDataObj.serviceUrl = dataObj.serviceUrl;
            newDataObj.admToken = dataObj.admToken;
            newDataObj.hostUrl = dataObj.hostUrl;
            if (dataObj.gateway.length > 10) {
                newDataObj.gateway = dataObj.gateway.substr(0, 10);
                newDataObj.gatewayHidden = dataObj.gateway
                newDataObj.gatewayHiddenFlag = true;
            }
            else {
                newDataObj.gateway = dataObj.gateway;
                newDataObj.gatewayHiddenFlag = false;
            }

            if (dataObj.oauth_provider.length > 10) {
                newDataObj.oauth_provider = dataObj.oauth_provider.substr(0, 10);
                newDataObj.oauth_providerHidden = dataObj.oauth_provider
                newDataObj.oauth_providerHiddenFlag = true;
            }
            else {
                newDataObj.oauth_provider = dataObj.oauth_provider;
                newDataObj.oauth_providerHiddenFlag = false;
            }

            if (dataObj.zone.length > 10) {
                newDataObj.zone = dataObj.zone.substr(0, 10);
                newDataObj.zoneHidden = dataObj.zone
                newDataObj.zoneHiddenFlag = true;
            }
            else {
                newDataObj.zone = dataObj.zone;
                newDataObj.zoneHiddenFlag = false;
            }

            if (dataObj.subscription.length > 10) {
                newDataObj.subscription = dataObj.subscription.substr(0, 10);
                newDataObj.subscriptionHidden = dataObj.subscription
                newDataObj.subscriptionHiddenFlag = true;
            }
            else {
                newDataObj.subscription = dataObj.subscription;
                newDataObj.subscriptionHiddenFlag = false;
            }

            if (dataObj.remote_host.length > 10) {
                newDataObj.remote_host = dataObj.remote_host.substr(0, 10);
                newDataObj.remote_hostHidden = dataObj.remote_host
                newDataObj.remote_hostHiddenFlag = true;
            }
            else {
                newDataObj.remote_host = dataObj.remote_host;
                newDataObj.remote_hostHiddenFlag = false;
            }


            if (dataObj.remote_port.length > 10) {
                newDataObj.remote_port = dataObj.remote_port.substr(0, 10);
                newDataObj.remote_portHidden = dataObj.remote_port
                newDataObj.remote_portHiddenFlag = true;
            }
            else {
                newDataObj.remote_port = dataObj.remote_port;
                newDataObj.remote_portHiddenFlag = false;
            }

            newTableData.push(newDataObj);
        }

        this.setState({
            newTableData: newTableData,
            showTableInit: true
        });

        if (preserveState === true) {
            setTimeout(function () {
                window.initTable('maintainagentupgradeTable', true);
            }, 100);
        }
        else {
            setTimeout(function () {
                window.initTable('maintainagentupgradeTable', false);
            }, 100);
        }

    }
    componentDidUpdate() {
        //window.initTable('maintainagentupgradeTable');
    }

    showHideTableTdData(objectIndex, fieldName) {
        let newTableData = [...this.state.newTableData];
        let copiedObjectToChange = Object.assign({}, newTableData[objectIndex]);
        if (fieldName === 'gateway') {
            let tempValue = copiedObjectToChange.gateway;
            copiedObjectToChange.gateway = copiedObjectToChange.gatewayHidden;
            copiedObjectToChange.gatewayHidden = tempValue;
            copiedObjectToChange.gatewayHiddenFlag = !copiedObjectToChange.gatewayHiddenFlag;
            newTableData[objectIndex] = copiedObjectToChange;
        }
        else if (fieldName === 'oauth_provider') {
            let tempValue = copiedObjectToChange.oauth_provider;
            copiedObjectToChange.oauth_provider = copiedObjectToChange.oauth_providerHidden;
            copiedObjectToChange.oauth_providerHidden = tempValue;
            copiedObjectToChange.oauth_providerHiddenFlag = !copiedObjectToChange.oauth_providerHiddenFlag;
            newTableData[objectIndex] = copiedObjectToChange;
        }

        else if (fieldName === 'zone') {
            let tempValue = copiedObjectToChange.zone;
            copiedObjectToChange.zone = copiedObjectToChange.zoneHidden;
            copiedObjectToChange.zoneHidden = tempValue;
            copiedObjectToChange.zoneHiddenFlag = !copiedObjectToChange.zoneHiddenFlag;
            newTableData[objectIndex] = copiedObjectToChange;
        }

        else if (fieldName === 'subscription') {
            let tempValue = copiedObjectToChange.subscription;
            copiedObjectToChange.subscription = copiedObjectToChange.subscriptionHidden;
            copiedObjectToChange.subscriptionHidden = tempValue;
            copiedObjectToChange.subscriptionHiddenFlag = !copiedObjectToChange.subscriptionHiddenFlag;
            newTableData[objectIndex] = copiedObjectToChange;
        }

        else if (fieldName === 'remote_host') {
            let tempValue = copiedObjectToChange.remote_host;
            copiedObjectToChange.remote_host = copiedObjectToChange.remote_hostHidden;
            copiedObjectToChange.remote_hostHidden = tempValue;
            copiedObjectToChange.remote_hostHiddenFlag = !copiedObjectToChange.remote_hostHiddenFlag;
            newTableData[objectIndex] = copiedObjectToChange;
        }
        else if (fieldName === 'remote_port') {
            let tempValue = copiedObjectToChange.remote_port;
            copiedObjectToChange.remote_port = copiedObjectToChange.remote_portHidden;
            copiedObjectToChange.remote_portHidden = tempValue;
            copiedObjectToChange.remote_portHiddenFlag = !copiedObjectToChange.remote_portHiddenFlag;
            newTableData[objectIndex] = copiedObjectToChange;
        }

        this.setState({
            newTableData: newTableData
        });
    }

    filterByValue(array, string) {
        return array.filter(o =>
            Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
    }

    filterData(e) {
        window.destroyDataTable('maintainagentupgradeTable');
        let searchStr = e.target.value.trim();
        let searchStrWithSp = e.target.value;
        let wholeData = [...this.state.tableData];
        let filteredData = [];
        let newTableData = [];
        if (searchStr != '') {
            filteredData = this.filterByValue(wholeData, searchStr);
        }
        else {
            filteredData = wholeData;
        }

        for (let dataObj of filteredData) {
            let newDataObj = {};
            newDataObj.agent_id = dataObj.agent_id;
            newDataObj.serverId = dataObj.serverId;
            newDataObj.clientId = dataObj.clientId;
            newDataObj.userId = dataObj.userId;
            newDataObj.gatewayId = dataObj.gatewayId;
            newDataObj.targetId = dataObj.targetId;
            newDataObj.agentMode = dataObj.agentMode;
            newDataObj.uaaClientId = dataObj.uaaClientId;
            newDataObj.uaaClientSecret = dataObj.uaaClientSecret;
            newDataObj.localPort = dataObj.localPort;
            newDataObj.duration = dataObj.duration.toString();
            newDataObj.group = dataObj.group;
            newDataObj.environment = dataObj.environment;
            newDataObj.gatewayPort = dataObj.gatewayPort;
            newDataObj.serviceUrl = dataObj.serviceUrl;
            newDataObj.admToken = dataObj.admToken;
            newDataObj.hostUrl = dataObj.hostUrl;
            if (dataObj.gateway.length > 10) {
                newDataObj.gateway = dataObj.gateway.substr(0, 10);
                newDataObj.gatewayHidden = dataObj.gateway
                newDataObj.gatewayHiddenFlag = true;
            }
            else {
                newDataObj.gateway = dataObj.gateway;
                newDataObj.gatewayHiddenFlag = false;
            }

            if (dataObj.oauth_provider.length > 10) {
                newDataObj.oauth_provider = dataObj.oauth_provider.substr(0, 10);
                newDataObj.oauth_providerHidden = dataObj.oauth_provider
                newDataObj.oauth_providerHiddenFlag = true;
            }
            else {
                newDataObj.oauth_provider = dataObj.oauth_provider;
                newDataObj.oauth_providerHiddenFlag = false;
            }

            if (dataObj.zone.length > 10) {
                newDataObj.zone = dataObj.zone.substr(0, 10);
                newDataObj.zoneHidden = dataObj.zone
                newDataObj.zoneHiddenFlag = true;
            }
            else {
                newDataObj.zone = dataObj.zone;
                newDataObj.zoneHiddenFlag = false;
            }

            if (dataObj.subscription.length > 10) {
                newDataObj.subscription = dataObj.subscription.substr(0, 10);
                newDataObj.subscriptionHidden = dataObj.subscription
                newDataObj.subscriptionHiddenFlag = true;
            }
            else {
                newDataObj.subscription = dataObj.subscription;
                newDataObj.subscriptionHiddenFlag = false;
            }

            if (dataObj.remote_host.length > 10) {
                newDataObj.remote_host = dataObj.remote_host.substr(0, 10);
                newDataObj.remote_hostHidden = dataObj.remote_host
                newDataObj.remote_hostHiddenFlag = true;
            }
            else {
                newDataObj.remote_host = dataObj.remote_host;
                newDataObj.remote_hostHiddenFlag = false;
            }


            if (dataObj.remote_port.length > 10) {
                newDataObj.remote_port = dataObj.remote_port.substr(0, 10);
                newDataObj.remote_portHidden = dataObj.remote_port
                newDataObj.remote_portHiddenFlag = true;
            }
            else {
                newDataObj.remote_port = dataObj.remote_port;
                newDataObj.remote_portHiddenFlag = false;
            }

            newTableData.push(newDataObj);
        }

        this.setState({
            newTableData: newTableData,
            searchString: searchStrWithSp
        });

        setTimeout(function () {
            window.initTable('maintainagentupgradeTable', false);
        }, 0);
    }

    edit(item) {
        //console.log(item);
        let editItem = Object.assign({}, item);
        if(editItem.zoneHiddenFlag){
            editItem.zone = editItem.zoneHidden;
        }
        if(editItem.oauth_providerHiddenFlag){
            editItem.oauth_provider = editItem.oauth_providerHidden;
        }
        window.destroyDataTable('maintainagentupgradeTable');
        this.setState({
            editItemData: editItem,
            viewTable: false
        });
    }

    deleteData(tbodyIndex, tbodyVal) {
        let cnf = window.confirm('Are you sure you want to delete');
        let rowdata = tbodyVal
        let deletePath = ''
        let deleteId = ''
        if (cnf) {
            this.props.showGlobalMessage(true, true, 'Please Wait....', 'custom-success');

            if (rowdata.agentMode === '1') {
                deleteId = rowdata.gatewayId
                deletePath = '/deleteGateway?gateway_id='

            }
            else if (rowdata.agentMode === '2') {
                deleteId = rowdata.serverId
                deletePath = '/deleteServer?server_id='

            }
            else if (rowdata.agentMode === '3') {
                deleteId = rowdata.clientId
                deletePath = '/deleteClient?client_id='

            }

            fetch(this.props.baseUrl + deletePath + deleteId, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': this.props.authToken
                }
            })
                .then((response) => {
                    if (response.status === 200) {
                        response.json().then((respData) => {
                            if (respData.errorStatus.status === 'ok') {
                                console.log(respData)
                                let newData = respData.data
                                setTimeout(() => {
                                    this.handleDataTable(true)
                                }, 3000);
                                this.props.showGlobalMessage(false, true, 'Record deleted successfuly', 'custom-success');
                                let that = this;
                                setTimeout(function () {
                                    that.props.hideGlobalMessage();
                                }, 2000);
                                /* this.setState({
                                    newTableData: newRows,
                                }); */
                            }
                        });
                    }
                    else {
                        this.props.showGlobalMessage(true, true, respData.errorStatus.statusMsg, 'custom-danger');
                        let that = this;
                        setTimeout(function () {
                            that.props.hideGlobalMessage();
                        }, 2000);

                    }
                })

        }

    }

    disbableData(tbodyIndex) {
        let cnf = window.confirm('Are you sure you want to disable');
        if (cnf) {

            fetch(this.state.apiEndPoints.baseUrl)
                .then((response) => {
                    if (response.status === 200) {
                        response.json().then((zones) => {
                            this.props.showGlobalMessage(true, true, 'Record disabled successfuly', 'custom-success');
                            let that = this;
                            setTimeout(function () {
                                that.props.hideGlobalMessage();
                            }, 2000);

                            this.generateTableStructure();

                        });
                    }
                })

        }

    }

    changeView() {
        this.setState({
            viewTable: true
        });
        setTimeout(function () {
            window.initTable('maintainagentupgradeTable', true);
        }, 0);
    }

    render() {
        return (
            <div>
                {this.state.viewTable ?
                    <div className="row Maintainagentupgrade">
                        <div className="col-md-12">
                            <div className="row mt-2">
                                <div className="col-sm-6 text-left">
                                    <div className="d-inline">
                                        <button type="button" className="btn btn-sm btn-outline-secondary disabled">
                                            <i className="fa fa-filter"></i>
                                            FILTER
                                </button>
                                    </div>
                                    <div className="d-inline p-2">
                                        <input
                                            type="text"
                                            value={this.state.searchString}
                                            className="d-inline form-control form-control-sm search-field"
                                            onChange={(event) => { this.filterData(event) }} />
                                    </div>
                                </div>
                            </div>
                            <div className="centered-div">
                                { this.state.showTableInit ? 
                                    <table id="maintainagentupgradeTable" className="table">
                                        <thead>
                                            <tr>
                                                <th>Subscription</th>
                                                <th>Agent ID</th>
                                                <th>Gateway</th>
                                                <th>Group</th>
                                                <th>OAuth Provider</th>
                                                <th>Zone</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                            this.state.newTableData.map((tbodyVal, tbodyIndex) => {
                                                    return (
                                                        <tr key={'maintainagentupgradeTableTbodyTr_' + tbodyIndex}>
                                                            <td>
                                                                {tbodyVal.subscription}&nbsp;&nbsp;
                                            {tbodyVal.subscriptionHiddenFlag ?
                                                                    <img onClick={this.showHideTableTdData.bind(this, tbodyIndex, 'subscription')} className="icon-arrowmore" alt="td-detail" src="assets/static/images/icon_arrowmore.svg" /> :
                                                                    null
                                                                }
                                                            </td>
                                                            <td>{tbodyVal.agent_id}</td>
                                                            <td>
                                                                {tbodyVal.gateway}&nbsp;&nbsp;
                                            {
                                                                    tbodyVal.gatewayHiddenFlag ?
                                                                        <img onClick={this.showHideTableTdData.bind(this, tbodyIndex, 'gateway')} className="icon-arrowmore" alt="td-detail" src="assets/static/images/icon_arrowmore.svg" /> :
                                                                        null
                                                                }
                                                            </td>
                                                            <td>{tbodyVal.group}</td>
                                                            <td>
                                                                {tbodyVal.oauth_provider}&nbsp;&nbsp;
                                            {tbodyVal.oauth_providerHiddenFlag ?
                                                                    <img onClick={this.showHideTableTdData.bind(this, tbodyIndex, 'oauth_provider')} className="icon-arrowmore" alt="td-detail" src="assets/static/images/icon_arrowmore.svg" /> :
                                                                    null
                                                                }
                                                            </td>
                                                            <td>
                                                                {tbodyVal.zone}&nbsp;&nbsp;
                                            {tbodyVal.zoneHiddenFlag ?
                                                                    <img onClick={this.showHideTableTdData.bind(this, tbodyIndex, 'zone')} className="icon-arrowmore" alt="td-detail" src="assets/static/images/icon_arrowmore.svg" /> :
                                                                    null
                                                                }
                                                            </td>
                                                            <td>
                                                                <span className="action-img">
                                                                    <img onClick={this.edit.bind(this, tbodyVal)} alt="edit-icon" title="Edit" src="assets/static/images/iconedit_tablemaintainmonitor.svg" />
                                                                    {/*<img alt="refresh-icon" title="Refresh" src="assets/static/images/iconupdate_tablemaintain.svg" />
                                                                    <img alt="disable-icon" onClick={this.disbableData.bind(this, tbodyIndex, tbodyVal)} title="Disable" src="assets/static/images/icondisable_tablemaintain.svg" />*/}
                                                                    <img alt="delete-icon" onClick={this.deleteData.bind(this, tbodyIndex, tbodyVal)} title="Delete" src="assets/static/images/icondelete_tablemaintainmonitor.svg" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table> :
                                    <p className="text-center loader-icon">
                                        <img alt="loading" src="assets/static/images/rolling.svg" />
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <Maintainagentedit handleDataTable={this.handleDataTable.bind(this)} baseUrl={this.props.baseUrl} userId={this.props.userId} showGlobalMessage={this.props.showGlobalMessage.bind(this)} hideGlobalMessage={this.props.hideGlobalMessage.bind(this)} changeView={this.changeView.bind(this)} editItemData={this.state.editItemData}></Maintainagentedit>
                }
            </div>
        )
    }
}
