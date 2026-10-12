+++
slug = "cm-ocr-quality"
title = "OCR quality estimate for Compact Memory pages"
author = "Kai Eckert"
date = "2026-10-12"
kind = "complement"
method = ["statistical"]
inputs = ["compact-memory"]
stable = "2026-10-12"

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/cm-ocr-quality"

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "b8e227c3dc120eeabdda242096eca3683fbc2683"

  [[versions.files]]
  path = "cm-ocr-quality.ttl.gz"
  bytes = 7353618
  sha256 = "50de7954aa34356a4e7795d7ada520065bfb3756969fb50e53bb6f4829207afb"
  triples = 846808

  [[versions.files]]
  path = "cm-ocr-quality-meta.ttl.gz"
  bytes = 2236
  sha256 = "e617aa1832a4c6e676077ff3a5d23a1168fdd606fdab06c3615e013a566723bb"
  triples = 58

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "First version: the OCR quality estimate of the dashboard as a dataset (decision 0020)."
+++
<!-- Copy of catalog/cm-ocr-quality.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
An estimate of the OCR quality of every page of Compact Memory, and the mean per journal.

<!--more-->

Per page (`jl:ocrKnownWordShare`): the share of its words (letters only, at least two characters, lowercased) that
occur at least 10 times in every 20th page of the corpus. Per journal (`jl:meanOcrKnownWordShare`): the mean over its
pages. An estimate, not a measurement: Hebrew, Yiddish and Russian pages score lower partly because the word list is
dominated by German. The statements are about the pages and journals of compact-memory; the texts come from the
full text of the FID portal's Compact Memory search.
