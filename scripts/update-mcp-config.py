#!/usr/bin/env python3
import json

path = "/Users/home/.deepseek/mcp.json"
with open(path) as f:
    cfg = json.load(f)

# disable broken virga-stdio
if "virga-stdio" in cfg["servers"]:
    cfg["servers"]["virga-stdio"]["disabled"] = True
    cfg["servers"]["virga-stdio"]["enabled"] = False

# add browser-tools
cfg["servers"]["browser-tools"] = {
    "command": "npx",
    "args": ["@agentdeskai/browser-tools-mcp@1.2.0"],
    "env": {},
    "url": None,
    "connect_timeout": 15,
    "execute_timeout": 60,
    "read_timeout": 120,
    "disabled": False,
    "enabled": True,
    "required": False,
    "enabled_tools": [],
    "disabled_tools": [],
}

with open(path, "w") as f:
    json.dump(cfg, f, indent=2)

print("MCP config updated")
