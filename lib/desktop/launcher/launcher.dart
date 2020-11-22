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

import 'package:Pangolin/utils/localization/localization.dart';
import 'package:Pangolin/utils/widgets/blur.dart';
import 'package:Pangolin/applications/applications.dart';
import 'package:Pangolin/utils/widgets/cards.dart';
import 'package:flutter/material.dart';
import 'searchbar.dart';
import 'dart:ui';

class LauncherWidget extends StatefulWidget {
  @override
  LauncherState createState() => LauncherState();
}

MaterialButton buildTile(String icon, String label) {
  return MaterialButton(
    onPressed: null,
    child: Column(
      //mainAxisSize: MainAxisSize.min,
      //mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        new Image.asset(
          icon,
          fit: BoxFit.fill,
          width: 64.0,
          height: 64.0,
        ),
        Container(
          margin: EdgeInsets.only(top: 8),
          child: Text(
            label,
            style: TextStyle(
              fontSize: 15.0,
              color: Colors.white,
            ),
            textAlign: TextAlign.center,
          ),
        ),
      ],
    ),
  );
}

class LauncherState extends State<LauncherWidget> {
  @override
  Widget build(BuildContext context) {
    Localization local = Localization.of(context)!;

    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.deepOrange,
        primaryColor: const Color(0xFFff5722),
        accentColor: const Color(0xFFff5722),
        canvasColor: Colors.black.withOpacity(0.1),
      ),
      home: new Stack(
        children: [
          new Blur(
            child: new Container(
              decoration:
                  new BoxDecoration(color: Colors.black.withOpacity(0.5)),
            ),
          ),
          new Scaffold(
            body: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  new SearchWidget(local.get("launcher_search")),
                  const SizedBox(height: 35),
                  new SingleChildScrollView(
                      padding: new EdgeInsets.only(
                          left: 10.0, right: 10.0, top: 5.0),
                      scrollDirection: Axis.horizontal,
                      child: new Row(children: <Widget>[
                        buildCard(
                            Icons.brightness_low,
                            local.get("launcher_card_system_title"),
                            Colors.deepOrange,
                            Colors.deepOrange.withAlpha(30),
                            local.get("launcher_card_system_value"),
                            context),
                        buildCard(
                            Icons.info,
                            local.get("launcher_card_information_title"),
                            Colors.blue,
                            Colors.blue.withAlpha(30),
                            local.get("launcher_card_information_value"),
                            context),
                        buildCard(
                            Icons.music_note,
                            local.get("launcher_card_music_title"),
                            Colors.lightGreen,
                            Colors.lightGreen.withAlpha(30),
                            local.get("launcher_card_music_value"),
                            context),
                        buildCard(
                            Icons.lock,
                            local.get("launcher_card_security_title"),
                            Colors.red,
                            Colors.red.withAlpha(30),
                            local.get("launcher_card_security_value"),
                            context),
                        buildCard(
                            Icons.memory,
                            local.get("launcher_card_kernel_title"),
                            Colors.pink,
                            Colors.pink.withAlpha(30),
                            local.get("launcher_card_kernel_value"),
                            context),
                      ])),
                  tileSection(context),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
