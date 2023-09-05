# How to publish

## Configuration

Before you can publish to the registry, you need to authenticate with GitHub using a Personal Access Token (PAT).

1. Create a PAT with `write:packages` scope at https://github.com/settings/tokens.

2. Add your PAT to `~/.npmrc`, like so:

```
//npm.pkg.github.com/:_authToken=MY_PERSONAL_ACCESS_TOKEN
@showhere:registry=https://npm.pkg.github.com/
```

3. Log into NPM with the Showhere scope and GitHub Package registry:

```
npm login --scope=@showhere --registry=https://npm.pkg.github.com
```

## Publication

1. Increment version number in `package.json`
2. Compile the components with `npm run build`
3. Run `npm publish`
4. :tada:
