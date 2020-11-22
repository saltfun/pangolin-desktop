/*
Copyright 2019 The dahliaOS Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import 'dart:ui';

import 'package:Pangolin/utils/hiveManager.dart';
import 'package:Pangolin/utils/widgets/conditionWidget.dart';
import 'package:Pangolin/utils/widgets/settingsTile.dart';
import 'package:flutter/material.dart';

class Connections extends StatefulWidget {
  @override
  _ConnectionsState createState() => _ConnectionsState();
}

class _ConnectionsState extends State<Connections> {
  List<WifiItem>? wifiList;
  List<BluetoothItem>? bluetoothList;
  @override
  void initState() {
    // TODO: implement initState
    wifiList?.add(new WifiItem("Wi-Fi 1", true));
    wifiList?.add(new WifiItem("Wi-Fi 2", false));
    wifiList?.add(new WifiItem("Wi-Fi 3", false));
    bluetoothList
        ?.add(new BluetoothItem("Some Random Bluetooth Device", false));
    bluetoothList?.add(new BluetoothItem(
        "Another Bluetooth Device with a longer name to test if that causes errors",
        false));

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 40),
          child: Column(
            children: [
              Center(
                  child: Text(
                "Connections",
                style: TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.bold,
                    fontFamily: "Roboto"),
              )),
              Padding(
                padding: const EdgeInsets.all(30.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Padding(
                      padding: const EdgeInsets.fromLTRB(10, 0, 0, 0),
                      child: Text("Wi-Fi and Bluetooth",
                          style: TextStyle(
                              fontSize: 17,
                              letterSpacing: 0.2,
                              fontWeight: FontWeight.bold)),
                    ),
                    SizedBox(height: 5),
                    SettingsTile(
                      children: [
                        Wrap(
                          children: [
                            Column(
                              children: [
                                SwitchListTile(
                                  onChanged: (bool value) {
                                    setState(() {
                                      HiveManager.set("wifi", value);
                                    });
                                  },
                                  value: HiveManager.get("wifi"),
                                  title: Text("Enable Wi-Fi"),
                                ),
                                CustomConditionWidget(
                                    HiveManager.get("wifi"),
                                    Container(
                                      height: 300,
                                      child: ListView.builder(
                                          itemCount: wifiList?.length,
                                          itemBuilder:
                                              (BuildContext context, int i) {
                                            return ListTile(
                                              leading: Icon(
                                                wifiList![i].icon,
                                                color: wifiList![i].connected
                                                    ? Color(HiveManager.get(
                                                        "accentColorValue"))
                                                    : Colors.grey,
                                              ),
                                              title: Text(
                                                wifiList![i].name,
                                                style: TextStyle(
                                                  color: wifiList![i].connected
                                                      ? Color(HiveManager.get(
                                                          "accentColorValue"))
                                                      : (HiveManager.get(
                                                              "darkMode")
                                                          ? Colors.white
                                                          : Colors.grey[900]),
                                                ),
                                              ),
                                              subtitle: Text(
                                                  wifiList![i].connected
                                                      ? "Connected"
                                                      : "Disconnected"),
                                              onTap: () {
                                                setState(() {
                                                  setConnected(i, wifiList!);
                                                });
                                              },
                                            );
                                          }),
                                    ),
                                    SizedBox.shrink()),
                              ],
                            ),
                            Divider(),
                            Column(
                              children: [
                                SwitchListTile(
                                  onChanged: (bool value) {
                                    setState(() {
                                      HiveManager.set("bluetooth", value);
                                    });
                                  },
                                  value: HiveManager.get("bluetooth"),
                                  title: Text("Enable Bluetooth"),
                                ),
                                CustomConditionWidget(
                                    HiveManager.get("bluetooth"),
                                    Container(
                                      height: 300,
                                      child: ListView.builder(
                                          itemCount: bluetoothList!.length,
                                          itemBuilder:
                                              (BuildContext context, int i) {
                                            return ListTile(
                                              leading: Icon(
                                                bluetoothList![i].icon,
                                                color:
                                                    bluetoothList![i].connected
                                                        ? Color(HiveManager.get(
                                                            "accentColorValue"))
                                                        : Colors.grey,
                                              ),
                                              title: Text(
                                                bluetoothList![i].name,
                                                overflow: TextOverflow.ellipsis,
                                                style: TextStyle(
                                                  color: bluetoothList![i]
                                                          .connected
                                                      ? Color(HiveManager.get(
                                                          "accentColorValue"))
                                                      : (HiveManager.get(
                                                              "darkMode")
                                                          ? Colors.white
                                                          : Colors.grey[900]),
                                                ),
                                              ),
                                              subtitle: Text(
                                                  bluetoothList![i].connected
                                                      ? "Connected"
                                                      : "Disconnected"),
                                              onTap: () {
                                                setState(() {
                                                  setConnected(
                                                      i, bluetoothList!);
                                                });
                                              },
                                            );
                                          }),
                                    ),
                                    SizedBox.shrink()),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: BottomAppBar(
          elevation: 0.0,
          color: Color(0x00ffffff),
          child: new SizedBox(
              height: 50,
              width: 15,
              child: new Padding(
                  padding: EdgeInsets.all(0),
                  child: Card(
                    elevation: 0,
                    color: Colors.amber[500],
                    child: new SingleChildScrollView(
                      scrollDirection: Axis.horizontal,
                      child: new Row(
                        children: [
                          new Center(
                              child: new Padding(
                                  padding: EdgeInsets.all(8),
                                  child: Icon(
                                    Icons.warning,
                                    size: 25,
                                    color: Colors.grey[900],
                                  ))),
                          Center(
                              child: new Padding(
                                  padding: EdgeInsets.all(8),
                                  child: new Text(
                                    "WARNING: You are on a pre-release build of dahliaOS. Wireless networking and Bluetooth have been disabled.",
                                    style: new TextStyle(
                                      color: Colors.grey[900],
                                      fontSize: 14,
                                      fontFamily: "Roboto",
                                    ),
                                  ))),
                        ],
                      ),
                    ),
                  )))),
    );
  }
}

class WifiItem {
  String name;
  IconData icon = Icons.wifi;
  bool connected;

  WifiItem(this.name, this.connected);
}

class BluetoothItem {
  String name;
  IconData icon = Icons.bluetooth;
  bool connected;

  BluetoothItem(this.name, this.connected);
}

setConnected(int index, List items) {
  switch (items[index].connected) {
    case true:
      for (int _i = 0; _i < items.length; _i++) {
        items[_i].connected = false;
      }
      items[index].connected = false;
      break;
    case false:
      for (int _i = 0; _i < items.length; _i++) {
        items[_i].connected = false;
      }
      items[index].connected = true;
      break;
  }
}
