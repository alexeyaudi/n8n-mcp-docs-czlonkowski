window.BENCHMARK_DATA = {
  "lastUpdate": 1757680397102,
  "repoUrl": "https://github.com/alexeyaudi/n8n-mcp-docs-czlonkowski",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "czlonkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "czlonkowski",
            "username": "czlonkowski"
          },
          "distinct": true,
          "id": "b944afa1bbce3c09e00004cff7ee660f61423057",
          "message": "fix: add Jekyll config to prevent Liquid syntax errors in GitHub Pages\n\n- Jekyll was trying to parse Liquid template syntax in our code examples\n- This caused the Pages build to fail with syntax errors\n- Added _config.yml to exclude all documentation and source files\n- GitHub Pages will now only process benchmark-related files\n- Fixes the pages-build-deployment workflow failure\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-08-05T08:50:52+02:00",
          "tree_id": "5408835cd584bd20fddedaf46fa98b519ad19eab",
          "url": "https://github.com/alexeyaudi/n8n-mcp-docs-czlonkowski/commit/b944afa1bbce3c09e00004cff7ee660f61423057"
        },
        "date": 1754381212823,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0188,
            "unit": "ms",
            "range": 0.3016,
            "extra": "53248 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1646,
            "unit": "ms",
            "range": 0.5164,
            "extra": "316 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.005,
            "unit": "ms",
            "range": 0.28700000000000003,
            "extra": "199425 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0665,
            "unit": "ms",
            "range": 0.36019999999999996,
            "extra": "15030 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1441508c00842ab406cdf84e426bf15b57e4e1fb",
          "message": "Merge pull request #186 from czlonkowski/1.110.1\n\nchore: update n8n dependencies to 1.110.1",
          "timestamp": "2025-09-10T00:16:35+02:00",
          "tree_id": "b38518935cfa6bc68b6481ec5bf6ed775df14584",
          "url": "https://github.com/alexeyaudi/n8n-mcp-docs-czlonkowski/commit/1441508c00842ab406cdf84e426bf15b57e4e1fb"
        },
        "date": 1757680396817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "range": "0.23539999999999997",
            "unit": "ms",
            "extra": "52431 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1666,
            "range": "0.7235",
            "unit": "ms",
            "extra": "316 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.2773",
            "unit": "ms",
            "extra": "211915 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0698,
            "range": "0.3551",
            "unit": "ms",
            "extra": "14329 ops/sec"
          }
        ]
      }
    ]
  }
}