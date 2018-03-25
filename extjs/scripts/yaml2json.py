#!/usr/bin/env python3
import yaml, json, sys


json.dump(yaml.load(sys.stdin), sys.stdout, indent=4)
