# Learning PCF - Component Information

This PCF component was created to learn about input, output, and change event handling using an input textbox control.

## Initialization

Initialize the PCF component project with details like name, namespace, and control type (Field in this case):

```sh
pac pcf init --namespace LearnPCF --name TextBoxControl --template field
```

## Dependencies

Ensure the following packages are added to the `package.json` file:

```json
"dependencies": {
    "@fluentui/react-components": "^9.58.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
},
"devDependencies": {
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7"
}
```

## Update the packages with npm install.
Install/Update the packages.

```sh
    PS D:\Project\Learning PCF> npm install
```

## Build and test the control.
Need to build the project.

```sh
    PS D:\Project\Learning PCF> npm run build
```

Run the project.

```sh
    PS D:\Project\Learning PCF> npm start watch 
```

## Steps to Create and Build the Solution

### In Browser Terminal

1. Create a solutions folder:

```sh
    PS D:\Project\Learning PCF> mkdir solutions
```

2. Go inside the solutions folder:

```sh
    PS D:\Project\Learning PCF> cd .\solutions\
```

3. Initialize the solution with publisher details:
```sh
    PS D:\Project\Learning PCF\solutions> pac solution init --publisher-name pnbehera --publisher-prefix pb
```

### In DOS Command Window

1. Build the solution for the PCF component:

```sh
D:\Project\Learning PCF\solutions> msbuild /t:build /restore
```