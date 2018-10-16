# pwa

> easy way to pwa

```
  pwa v1.9.5 / pwa.sh
  open echosystem for an open web. (WIP)

  Usage:
    pwa <source>             Starts dev server on <source> directory
    pwa <source> <domain>    Publishes <source> directory to the web at <domain>
    pwa <source> <output>    Compiles <source> into <output>

  Global Commands:
    pwa list                 List all projects
    pwa whoami               Show authenticated user
    pwa plan                 Upgrade/downgrade surge account
    pwa login                Authenticate and begin session
    pwa logout               Terminate session
    pwa help                 This help message

  Project Commands:
    pwa teardown <domain>    Removes <domain> from the web

  Examples:
    pwa .                    Serves current dir on port 9966
    pwa . example.com        Publishes current dir to 'example.com'
    pwa . www                Compiles current dir to 'www' directory
    pwa . _                  Publishes and generates sub domain

  please visit pwa.sh for more information
```