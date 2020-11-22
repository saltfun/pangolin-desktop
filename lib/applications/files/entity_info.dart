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

//credits: @HrX03 for API https://github.com/HrX03/Flux

import 'dart:io';

class EntityInfo {
  FileSystemEntity? entity;
  FileStat? stat;
  List<FileSystemEntity>? children = [];
  EntityType? entityType;

  EntityInfo({
    this.entity,
    this.stat,
    this.children,
    this.entityType,
  });

  bool get isDirectory => entityType == EntityType.DIRECTORY;

  String get path => entity!.path;
}

enum EntityType {
  FILE,
  DIRECTORY,
}
