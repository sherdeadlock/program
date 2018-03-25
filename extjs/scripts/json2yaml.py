#!/usr/bin/env python3
import yaml, json, sys


yaml.dump(json.load(sys.stdin), sys.stdout)
