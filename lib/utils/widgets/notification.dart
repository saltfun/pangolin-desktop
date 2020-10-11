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
import 'dart:convert';
import 'dart:io';

import 'package:Pangolin/main.dart';
import 'package:dnotify/dnotify.dart';
import 'package:flutter/material.dart';

class DahliaNotification extends StatelessWidget {
  /// The title of the notification.
  final String title;
  /// The text contents of the notification.
  final String body;
  /// The notification's icon.
  final dynamic icon = Icons.settings_applications;
  /// What to do when the notification is clicked on.
  final Function onClick = () {};
  /// The accent color for the notification.
  final Color color;
  /// The notification's unique ID.
  /// Used to manage the notification.
  final String id;
  /// The notification's source app name.
  final String source;

  DahliaNotification({
    Key key,
    this.title = "No title given",
    this.body = "",
    //this.icon = Icons.settings_applications,
    /// The accent color for the notification.
    Color color,
    @required this.id,
    this.source = "Pangolin Desktop"
  }) : this.color = color != null ? color : Colors.blue[700], super(key: key);

  Widget build(BuildContext context) {
    if (id == null) return Container(height: 0);
    else return Dismissible(
        key: GlobalKey(),
        direction: DismissDirection.vertical,
        confirmDismiss: (d) async {
          await DNotify.cancel(id);
          var f = await File.fromUri(Uri.file("/tmp/dnotify-live.json")).readAsString();
          var j = jsonDecode(f);
          var i = j.where((element) => element["id"] == id);
          return i.length < 1;
        },
        onDismissed: (direction) {
          for (var entry in Pangolin.overlayEntries) {
            entry.remove();
          }
        },
        child: Container(width:300, height:100, margin: EdgeInsets.all(16), child: Card(
          margin: EdgeInsets.symmetric(horizontal: 8.0),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(5.0),
          ),
          child: InkWell(
            splashColor: color,
            onTap: () {
              showDialog(
                builder: (BuildContext context) {
                  // return object of type Dialog
                  return AlertDialog(
                    title: new Text("Feature not implemented"),
                    content: new Text(
                        "This feature is currently not available on your build of Pangolin. Please see https://reddit.com/r/dahliaos to check for updates."),
                    actions: <Widget>[
                      // usually buttons at the bottom of the dialog
                      new FlatButton(
                        child: new Text("OK"),
                        onPressed: () {
                          Navigator.of(context).pop();
                        },
                      ),
                    ],
                  );
                },
                context: context,
              );
            },
            child: Container(
              width: 300,
              height: 100,
              child: new Padding(
                padding: const EdgeInsets.fromLTRB(8.0, 8.0, 8.0, 8.0),
                child: SingleChildScrollView(
                  child: new Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      mainAxisSize: MainAxisSize.max,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        new SingleChildScrollView(
                          scrollDirection: Axis.horizontal,
                          child: new Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              mainAxisSize: MainAxisSize.max,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: <Widget>[
                                new Icon(icon, color: color, size: 20.0),
                                new Text(
                                  " " + source,
                                  style: new TextStyle(
                                      fontSize: 15.0,
                                      color: color,
                                      fontWeight: FontWeight.w400,
                                      fontFamily: "Roboto"),
                                )
                              ]),
                        ),
                        new Padding(
                            padding: EdgeInsets.only(
                              top: 2,
                              left: 2,
                            ),
                            child: Column(
                              children: [
                                Text(
                                  title,
                                  style: new TextStyle(
                                      fontSize: 18.0,
                                      color: Colors.black,
                                      fontWeight: FontWeight.w500,
                                      fontFamily: "Roboto"),
                                ),
                                Text(
                                  body,
                                  style: new TextStyle(
                                      fontSize: 15.0,
                                      color: Colors.black,
                                      fontWeight: FontWeight.w400,
                                      fontFamily: "Roboto"),
                                ),
                            ]))
                      ]),
                ),
              ),
            ),
          ),
        )));
  }
}
