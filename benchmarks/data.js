window.BENCHMARK_DATA = {
  "lastUpdate": 1754381213225,
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
      }
    ]
  }
}