# Anpan UIkit

[![Version](https://img.shields.io/npm/v/@anpanswap-libs/uikit)](https://www.npmjs.com/package/@anpanswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@anpanswap-libs/uikit)](https://www.npmjs.com/package/@anpanswap-libs/uikit)

Anpan UIkit is a set of React components and hooks used to build pages on Anpan's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @anpanswap/uikit`

## Setup

### Theme

Before using Anpan UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@anpanswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@anpanswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
