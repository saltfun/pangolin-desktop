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
import 'package:Pangolin/desktop/window/model.dart';
import 'package:Pangolin/utils/hiveManager.dart';
import 'package:Pangolin/utils/widgets/hover.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter/rendering.dart';

class AppLauncherButton extends StatefulWidget {
  final Widget? app;
  final String? icon;
  final bool appExists;
  final bool customBar;
  final double childHeight;
  final double childWidth;
  final String? label;
  final AppLauncherButtonType type;
  final Color? color;
  final ValueChanged<bool> _callback;

  AppLauncherButton(
      {this.app,
      @required this.icon,
      this.label,
      this.type = AppLauncherButtonType.TaskBar,
      this.appExists = true,
      this.customBar = true,
      this.childHeight = 64.0,
      this.childWidth = 64.0,
      this.color,
      callback})
      : _callback =
            callback; //This alien syntax must be syntactical glucose for a setter. Neato.

  @override
  AppLauncherButtonState createState() => AppLauncherButtonState();
}

class AppLauncherButtonState extends State<AppLauncherButton> {
  bool _toggled = false;
  bool hover = false;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: (widget.type == AppLauncherButtonType.Drawer)
          ? EdgeInsets.all(10.0)
          : EdgeInsets.symmetric(horizontal: 4.0),
      child: Container(
        width: (widget.type == AppLauncherButtonType.Drawer) ? 125.0 : 45.0,
        height: (widget.type == AppLauncherButtonType.Drawer) ? 125.0 : 45.0,
        child: Hover(
            cursor: SystemMouseCursors.click,
            color: Colors.white.withOpacity(0.2),
            borderRadius: (widget.type == AppLauncherButtonType.Drawer)
                ? BorderRadius.circular(5)
                : BorderRadius.circular(0),
            child: Container(
              margin: (widget.type == AppLauncherButtonType.Drawer)
                  ? EdgeInsets.all(0.0)
                  : EdgeInsets.symmetric(horizontal: 4.0),
              width:
                  (widget.type == AppLauncherButtonType.Drawer) ? 200.0 : 45.0,
              height:
                  (widget.type == AppLauncherButtonType.Drawer) ? 200.0 : 45.0,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                mainAxisSize: MainAxisSize.max,
                children: [
                  Opacity(
                    opacity: widget.appExists ? 1.0 : 0.4,
                    child: GestureDetector(
                      onTap: () {
                        setState(() {
                          toggled = !_toggled;
                          widget._callback?.call(_toggled);
                        });

                        widget.appExists
                            ? Provider.of<WindowsData>(context, listen: false)
                                .add(
                                    child: widget.app!,
                                    color: HiveManager.get("coloredTitlebar")
                                        ? widget.color!
                                        : Colors.grey[900]!)
                            : showDialog(
                                context: context,
                                builder: (BuildContext context) {
                                  // return object of type Dialog
                                  return AlertDialog(
                                      title:
                                          new Text("Feature not implemented"),
                                      content: new Text(
                                          "This feature is currently not available on your build of Pangolin. Please see https://reddit.com/r/dahliaos to check for updates."),
                                      actions: <Widget>[
                                        // usually buttons at the bottom of the dialog
                                        new FlatButton(
                                            child: new Text("OK"),
                                            onPressed: () {
                                              Navigator.of(context)?.pop();
                                            })
                                      ]);
                                });
                      },
                      onLongPress: () {
                        Provider.of<WindowsData>(context, listen: false)
                            .windows!
                            .forEach((element) {
                          print(element.id);
                        });
                      },
                      child: Container(
                        child: Image.asset(
                          widget.icon!,
                          fit: BoxFit.contain,
                          width: (widget.type == AppLauncherButtonType.Drawer)
                              ? 64.0
                              : 34.0,
                          height: (widget.type == AppLauncherButtonType.Drawer)
                              ? 64.0
                              : 34.0,
                        ),
                      ),
                    ),
                  ),
                  (widget.type == AppLauncherButtonType.Drawer)
                      ? Padding(
                          padding: const EdgeInsets.only(top: 8.0),
                          child: Text(
                            widget.label!,
                            style: TextStyle(
                              fontSize: 15.0,
                              fontWeight: FontWeight.w400,
                              color: widget.appExists
                                  ? Colors.white
                                  : Colors.grey[400],
                            ),
                            textAlign: TextAlign.center,
                          ),
                        )
                      : SizedBox.shrink(),
                ],
              ),
            )),
      ),
    );
  }

  set toggled(bool value) {
    if (value == _toggled) {
      return;
    }
  }
}

enum AppLauncherButtonType { Drawer, TaskBar }
