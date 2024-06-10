# Nx Release - JSNation 2024 Talk demo

This is a demo repo for my talk at JSNation 2024 about "Simplify Package Releases – From Versioning to Publishing".

(talk recording link coming soon)

## About this repo

This is a very simple NPM workspaces monorepo with the goal of developing a bunch of related NPM packages, version them, generate changelogs and ultimately publish them to NPM. The structure is inspired by the [Tanstack Query](https://github.com/TanStack/query) repo (which uses Nx btw ;) ).

You can explore the structure of the repo by running

```
npx nx graph
```

### Adding Nx

The most straightforward way to to add Nx to an existing NPM workspaces monorepo is to run

```
npx nx init
```

This will walk you through a setup procedure.

### Running versioning and releasing

```
npx nx release -d
```

Note the `-d` which is to run in dry mode and simulate what would happen. Remove it to run it on your disk.

### Customizing Nx release

You can customize Nx release by adding a `release` node to your `nx.json`:

```json
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "targetDefaults": {
        ...
  },
  "release": {
    "version": {
      "conventionalCommits": true
    },
    "changelog": {
      "workspaceChangelog": {
        "createRelease": "github"
      }
    }
  },
  "defaultBase": "main"
}

```

Check out the links at the bottom of this readme for all the deails.

### Programmatic API

Many projects need full flexibility over the versioning & release process which is why Nx exposes a [programmatic API](https://nx.dev/features/manage-releases#using-the-programmatic-api-for-nx-release) for Nx release.

## Further links to dive deeper

- Nx Docs about Nx Release
  - Overview: https://nx.dev/features/manage-releases
  - Recipes: https://nx.dev/recipes/nx-release
  - Nx config: https://nx.dev/reference/nx-json#release
- Blog post: https://nx.dev/blog/2024-02-09-versioning-and-releasing-packages

**Connect with me**

- [My Twitter/X](https://x.com/juristr)
- [My Website](https://juri.dev)
- [Nx Discord Community](https://go.nx.dev/community)
