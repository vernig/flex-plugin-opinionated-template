# Opionionated template for Flex Plugin

This template is based on the [Typsecript scaffolding](https://github.com/twilio/flex-plugin-builder/tree/main/packages/create-flex-plugin/templates/ts) for a new Flex Plugin, with the addition of [`twilio-style`](https://github.com/twilio-labs/twilio-style)

# Usage 

In order to use this plugin, follow the [instructions](https://github.com/twilio/flex-plugin-builder/tree/main/packages/plugin-flex) to install Twilio CLI and Twilio Flex Plugin CLI, and then run the following command: 

```
twilio flex:plugins:create --template=https://github.com/vernig/flex-plugin-opinionated-template <name-of-your-awesome-plugin>
```

Please note that (differently from the scaffolding template) the name of the actual plugin is `MyTemplatePlugin`. If you want to change the name, run: 

```
$ node rename.js <name-of-your-awesome-plugin>
```