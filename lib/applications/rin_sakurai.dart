///Haru says:Experiment to test dynamic [appLoading] in flutter web because I'm foolhardy.

/// Composition of this app:
/// 1% Exploration of Dart VM Facilities
/// 99% Obscure Visual Novel Reference

import 'dart:isolate';
import 'dart:html';
import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../window/model.dart';
import 'dart:async';

dynamic appLoading; //Documentation Aesthetic

//TODO: If I'm allowed to be optimistic and use cryptic metaphors, the rough plan should be to:

//TODO: Create a Mirror World instance
//TODO: Use a message to pass App inside Mirror World to the outside world's call to the main [WindowsData] add method

//TODO: explore #33388

main() {
  runApp(Rin());
}

class Rin extends StatefulWidget {
  static String id = "/mirror_top";
  @override
  _RinState createState() => _RinState();
}

class _RinState extends State<Rin> with SingleTickerProviderStateMixin {
  AnimationController controller;
  Animation animation;

  @override
  void initState() {
    controller = AnimationController(
      duration: Duration(seconds: 1),
      vsync: this,
    );

    controller.forward();

//    animation.addStatusListener((status) {
//      if (status == AnimationStatus.completed) {
//        controller.reverse(from: 1.0);
//      } else if (status == AnimationStatus.dismissed) {
//        controller.forward();
//      }
//    });

    controller.addListener(() {
      setState(() {});
//      print(controller.value);
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          centerTitle: true,
          bottomOpacity: 70.0,
          title: Text('無理だよ〜'),
          flexibleSpace: Container(
              decoration: BoxDecoration(
                  color: Colors.pinkAccent,
                  boxShadow: <BoxShadow>[
                BoxShadow(
                    color: Colors.pink[100].withOpacity(controller.value),
                    offset: Offset.fromDirection(90),
                    blurRadius: 100,
                    spreadRadius: 200.5)
              ]))),
      backgroundColor: Colors.pink[100].withOpacity(controller.value),
      body: Padding(
        padding: EdgeInsets.symmetric(horizontal: 50.0),
        child: Container(
          decoration:
              BoxDecoration(color: Colors.pinkAccent, boxShadow: <BoxShadow>[
            BoxShadow(
                color: Colors.pinkAccent,
                offset: Offset.fromDirection(90),
                blurRadius: 15,
                spreadRadius: 20.5)
          ]),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              SizedBox(
                height: 90,
              ),
              InputButton(
                text: 'Create A Chronos World!',
                function: () async {
                  Isolate MirrorWorld = await Isolate.spawnUri(
                      Uri.http("raw.githubusercontent.com",
                          "dahlia-os/pangolin-desktop/master/lib/applications/editor.dart"),
                      null,
                      null);

                  print("Control Port: ${MirrorWorld.controlPort}");
                },
                color: Colors.pink[50],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Hero(
                    tag: 'rin-rin',
                    child: Container(
                      child: Image.asset('lib/images/sakurai_rin.png'),
                      height: (controller.value * 100),
                    ),
                  ),
                  Text(
                    "Dahlia",
                    style: TextStyle(
                      color: Colors.tealAccent,
                      fontSize: 16.0,
                      fontWeight: FontWeight.w900,
                    ),
                  ), //DahliaChronos
                  TypewriterAnimatedTextKit(
                      text: ['Chron'],
                      totalRepeatCount: 1,
                      speed: Duration(milliseconds: 500),
                      textStyle: TextStyle(
                        color: Colors.tealAccent,
                        fontSize: 16.0,
                        fontWeight: FontWeight.w900,
                      )),
                  Text(
                    'OS',
                    style: TextStyle(
                      color: Colors.tealAccent,
                      fontSize: 16.0,
                      fontWeight: FontWeight.w900,
                    ),
                  )
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class InputButton extends StatelessWidget {
  Color color;
  String text;
  Function func;

  InputButton({color: Color, function: Function, text: String}) {
    this.text = text;
    this.func = function;
    this.color = color;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 16.0),
      child: Material(
        elevation: 5.0,
        color: color,
        borderRadius: BorderRadius.circular(30.0),
        child: MaterialButton(
          onPressed: func,
          minWidth: 200.0,
          height: 42.0,
          child: Text(
            text,
            style: TextStyle(color: Colors.black),
          ),
        ),
      ),
    );
  }
}
