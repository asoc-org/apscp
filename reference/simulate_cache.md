# Simulate cache

Simulate a cache.

## Usage

``` r
simulate_cache(x, n = 10)
```

## Arguments

- x:

  [`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html)
  object.

- n:

  `integer` number of solutions to create in the cache.

## Value

A `list` object.

## See also

Other functions for simulating data:
[`simulate_binary_legend()`](https://asoc-org.github.io/apscp/reference/simulate_binary_legend.md),
[`simulate_continuous_legend()`](https://asoc-org.github.io/apscp/reference/simulate_continuous_legend.md),
[`simulate_pmtiles_file()`](https://asoc-org.github.io/apscp/reference/simulate_pmtiles_file.md),
[`simulate_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/simulate_prioritization_settings.md),
[`simulate_project()`](https://asoc-org.github.io/apscp/reference/simulate_project.md),
[`simulate_provenance()`](https://asoc-org.github.io/apscp/reference/simulate_provenance.md),
[`simulate_solution_legend()`](https://asoc-org.github.io/apscp/reference/simulate_solution_legend.md),
[`simulate_spatial_data()`](https://asoc-org.github.io/apscp/reference/simulate_spatial_data.md)

## Examples

``` r
# simulate data
d <- simulate_spatial_data()

# simulate cache
sim_cache <- simulate_cache(d)

# preview cache
print(sim_cache)
#> $precompute_1
#>   [1] 78 9c bd 97 4d 8e d4 40 0c 85 9f 34 33 10 b1 40 b5 c8 22 97 60 cf 0e 56 9c
#>  [26] 00 24 6e c3 1d 38 02 27 e4 08 48 33 49 a4 7c 9e af 9d 16 d3 dd 1b ab 6c a7
#>  [51] ca 3f cf af aa 7f 7e 48 f2 90 c7 77 c9 c3 53 92 3c fd f8 fe ed d3 e7 24 1f
#>  [76] 93 c7 df 5f fe e6 f9 f7 75 ac 72 7e 91 9b be d8 97 55 4e c7 f5 ee 17 ac e7
#> [101] 55 c2 7f 97 e3 68 2f df cd f0 cb d1 8f e7 32 0f 9e 53 f2 99 b0 66 7c b4 67
#> [126] 95 8c 6b 81 dd d6 03 b2 3b 87 71 72 df 59 e4 66 17 ff bd 0e ec df f4 ba 9f
#> [151] fa 33 8f 59 fc 4c 3f 44 0f dc 94 38 d8 df ae 8e ab 2c 79 22 ee 16 57 d8 bf
#> [176] c3 ab d5 af 9c 6f fd 35 7c ca ba eb 63 d9 6f 96 75 8e eb 12 bf cc 3d e3 2f
#> [201] 76 9b 6b 39 b7 ec c3 7a e5 f5 75 f1 6f 70 5f fc 0d d7 c4 41 a0 17 5e 20 de
#> [226] db f8 3a fc 1b 0e 23 7a d6 dd e6 44 f2 d2 fa 58 3f 39 97 d8 4f e3 e6 5c cb
#> [251] 3c 29 ae 2d 9e 17 d1 ce a1 f5 89 71 76 b8 57 7e 5f 2e eb 4f cf 8b dd 23 39
#> [276] ea 0d 4f 1a 87 48 e5 dd 40 1a 9e 37 7b 87 bb 21 f6 40 df f1 36 f9 64 93 c6
#> [301] 4f 5d dc 86 7b d6 8b 75 11 7e b6 78 5b fc d9 7c d8 3d 60 bc c5 f8 03 bd e1
#> [326] 82 7e 90 56 37 e5 59 99 3b ed 7b 33 2f 65 ff ed 7b e1 3d e5 03 e1 0d ed 5f
#> [351] c7 93 76 8f 5b 7d e9 47 dc 05 76 9b 53 f8 19 2e 8c e7 b4 0f cc 2b a2 17 7c
#> [376] 5a bf 14 ef 0d ef ec fe 56 67 d6 83 fb 19 ff 1a bf 1a de f9 dd 24 7e c6 23
#> [401] 82 f3 ee 5e 2c f8 cb 2a 6d 1f c9 bf e0 92 fa 75 5f 9b bb 16 ff dc 97 f8 11
#> [426] fe d4 b9 66 7c 86 3f f6 9f 3c c3 fa d8 f7 76 6f 49 9f 94 5f b8 2f ea a0 75
#> [451] 0c e4 74 d2 be 88 3e b0 9b 1f f3 01 7e 8d d7 3b dc 68 3c b3 d8 6d 5e 59 87
#> [476] f5 fb 5f cf f6 f7 7f ee 25 b7 38 4e fb 23 4f f5 1b 97 ed f7 92 5d 9c 5d 9e
#> [501] ff bb 4f 7b ce c9 3a 5d db a7 ab e3 58 6e bb ff b5 e7 99 fd 5e 73 72 ab 7e
#> [526] df 5a de 1a 27 1b 7f bd d5 7e 7b dc d6 6f e8 ef c5 2b 16 8f be fb 79 1f 98
#> [551] de ee 3f bb 37 79 df da 3b c7 de e9 e0 6b be 53 ed fd 5d f2 e4 fe cb 65 bb
#> [576] be eb e9 cf 38 86 48 7c 5f ee 51 4a c6 6b f5 b6 77 7f f7 7f c3 e2 b4 f7 71
#> [601] 60 b7 ef 96 c6 ce f7 a2 bd 2f ed 7d ce ef c6 49 3f a9 6f e9 73 f7 2e 94 f3
#> [626] 5b bc c8 fb 4a bf 0b ec c8 af 7d ff 19 8e ed 7b ea 73 d4 ab 9f e5 0f 1c 16
#> [651] bc 5b df 03 bf 88 b4 73 e7 c6 2f f0 23 ce 88 f7 4d 72 ae 3a 7c d9 fe 82 33
#> [676] 3b 47 ff e7 19 df 19 5f cb bc e8 ff 1e d6 93 f8 b2 ff 0b 39 da 19 3f e3 d4
#> [701] 35 ce 57 be 24 ce 3b be 63 7f 82 35 79 77 b5 13 3f ba 66 1d 8d cf 05 af 25
#> [726] 6e c3 9b e1 55 ea 51 ea 28 f7 96 9e 2b e7 94 bc 86 e8 03 79 32 0f ad 97 cd
#> [751] 8f e1 c5 e2 14 3e d3 b9 8d ac bb 7b cb ce e3 7e 96 f7 10 69 78 36 7e b5 39
#> [776] 0f f4 dc 3f 58 a3 5f ca 3f c4 a3 cd 95 e0 46 ed 86 b3 86 cf 2d 4e ed 3f eb
#> [801] 16 59 4b 5f 8d 17 4a 1c 36 e7 c6 27 c6 07 81 5e f0 5d 78 86 df 75 38 08 ec
#> [826] 16 07 f3 b2 ba c3 6e 78 51 1c 76 7d 66 9d 0d 2f 39 fa 9d ae 1b f9 69 88 5f
#> [851] c7 67 88 53 f9 d9 70 c4 7e 30 cf 1c e5 3f eb 3a 1a ef
#> 
#> $precompute_2
#>   [1] 78 9c c5 97 41 6e 14 41 0c 45 2d 25 81 11 0b 54 8b 5e cc 25 d8 b3 63 56 9c
#>  [26] 00 24 6e c3 1d 38 02 27 e4 08 48 a1 6b a4 79 9e 37 bf 43 d2 c9 6c ac aa 72
#>  [51] db 2e fb fb 97 e7 c7 87 aa ba ab fb 77 55 77 0f 55 55 0f df bf 7d fd f4 b9
#>  [76] aa 3e 56 dd ff 3a 8d 7a fc 9d 0e ff e4 97 3f eb ba ae af 4f 0b e4 c0 f9 80
#> [101] 3c e2 fc 80 7d ea 1d a1 77 90 f3 e5 ba 3c c7 2b f7 b1 f8 f8 9d c5 db f4 16
#> [126] 59 8f cb b5 e6 91 f9 61 5e 78 7f f3 0b bb 67 7f 03 eb 82 64 1e 99 5f ea 59
#> [151] 7d e1 47 71 44 bb 07 d9 a7 34 3c 50 cf f0 04 fb 1a cf 94 01 07 5a 87 29 d1
#> [176] 17 cd 1f ed 58 3f 94 ec 9b 3f eb c7 75 dd 70 40 5c 4b 3d 9b bf 82 e4 3e ef
#> [201] c3 b8 b6 e6 a9 ae eb 29 7e 98 cf d4 0f 86 47 e2 c6 fa ff 18 d6 8c 4f f8 c1
#> [226] 78 ad f5 d3 c6 78 db 77 b4 2f f9 67 7c cd 6f c2 2f ed 22 0f 7a 1f cb 17 f3
#> [251] b4 31 8f ca d3 89 f7 ad bf 89 63 f3 cf ef 60 af dd 1b 76 35 ee c2 7e c2 31
#> [276] f4 8d ff 9b bf 21 eb f9 9d d5 df f2 4f dc 59 dc cc 63 5d ae ed 5d 31 fb 2d
#> [301] 0f e4 53 cb 6b a8 6b bb 97 f1 e5 82 75 5d ea 35 ff 96 4f e8 69 df 84 fe 8c
#> [326] 7c c0 78 13 1e f8 1e 59 1e 6a 95 a9 3f ad 6f e6 f7 e6 77 9e db 3d 03 ef 28
#> [351] 9e 86 48 c6 97 f8 3e d5 61 dc 5e a7 fb 24 fe 6f f9 67 5c c4 11 ef 7f 94 7d
#> [376] e3 a1 50 97 e6 a7 70 6e 78 b4 fe 4e b8 2d 91 38 b7 3c eb fc c1 7c 32 2f 05
#> [401] 69 f8 b7 f8 91 27 3d b7 be 5c 44 b2 ae e2 2f f2 a6 f1 27 ef 2f fc d9 f0 12
#> [426] fa 43 f9 d9 f8 9f 6b d8 31 fb 8c ab e1 af 56 b9 35 cf 53 3f bc 13 ca 7b a9
#> [451] 4f b9 6f f5 64 fe 0a fb 85 73 c3 09 f2 92 78 88 f8 36 1e 6e 75 aa 55 a6 7e
#> [476] a0 3f f0 d5 cf 47 bd f7 bf 5f 4b ce b8 9f aa 9f be 7b aa dd bd e4 cc fb 73
#> [501] bf 9b f5 7a a9 b8 ce 76 37 d6 7d e2 e9 a5 fc 36 fb 3b dd 4f fd d5 6d 7f 56
#> [526] b7 d7 c2 d5 ff e2 e6 ad e5 de f9 d9 2b 2f 86 6f de 67 2f ff cd ef b8 ee 47
#> [551] df ed c2 3e df 21 ce 05 36 77 d9 3c bf 9e b7 39 d9 ce b7 ce 4f 62 47 df b7
#> [576] 29 ed 7b d8 e7 dc 12 e7 08 ae 6d 6e a1 7d 9b 13 78 7f 9b cf c4 bf e6 93 f3
#> [601] 03 fd 98 84 5f 9b df da bc 90 e6 aa 54 5f cb b7 cd 59 86 57 ce 7b d0 d7 7a
#> [626] f0 3b 3b 37 1c 30 0e de 87 76 c6 6d d9 e6 40 8b 5f 70 dc e2 2d c8 14 af f4
#> [651] 6d eb 6f c3 51 9a 8b a7 b4 3c 24 7c b0 7f 12 cf 55 d0 a3 c4 7d 0c ef fa bf
#> [676] aa b0 6f e7 ac 83 f1 1a e2 6a 75 48 7a ac f3 d8 b8 0e 7c a9 3c 68 bc 68 7c
#> [701] 04 fd 86 b7 d0 27 fa ff c9 ee 53 90 38 d7 fc 1a 3f f2 7c ae ed 9e 62 8f 7c
#> [726] a2 3c 4b 3b ec 0b e2 7c 4a f6 27 fd 52 5f f2 bd b9 2f 29 a1 9f 78 c5 de 1b
#> [751] 7d f7 58 67 d3 2f ec 17 24 eb 8b bc eb 3b 68 71 d8 7e e2 33 7b 6f 8c d7 8c
#> [776] 5f b8 36 9c f0 de 89 b7 0a 7a 86 df 54 77 7e 3f ed 2e 61 9f f5 9f e7 96 37
#> [801] eb 13 de 27 bc 63 8d 67 e6 39 e3 58 25 f5 35 bf e9 5d 3b 42 8f 71 1a 2f 70
#> [826] 4d 3b 96 a7 82 b4 fa d2 af f4 61 f3 23 bc af 75 37 3e b2 77 d9 fa eb b0 71
#> [851] bf 56 99 f0 63 38 b2 3c 6e ed 6f da c7 f7 a9 4f ff 02 de 3e 01 00
#> 
#> $precompute_3
#>   [1] 78 9c cd 97 4d 8e 13 41 0c 85 2d cd 0c b4 58 a0 2c 7a d1 97 60 cf 0e 56 9c
#>  [26] 00 24 6e c3 1d 38 02 27 e4 08 48 a3 aa 48 f9 dc 1f af 07 92 68 b2 b1 da e5
#>  [51] f2 ef b3 cb f9 fe ae aa 1e ea f1 4d d5 c3 53 55 d5 d3 b7 af 5f 3e 7c ac aa
#>  [76] f7 55 8f 3f 3f fd ae e7 df a4 9f b7 4b 7a e6 2f fb e7 8d bf e2 5e 0d 7a 92
#> [101] 6f da d9 70 be 08 7f 13 be d9 59 2f a9 da db 84 ce fb 43 ef f9 fe 0a 6a f6
#> [126] e7 f7 22 54 fc 6f 76 96 7d b9 e8 b7 e5 93 7a 17 f0 a7 5c 5d 7e 37 5c f0 1e
#> [151] e2 d1 7c f3 bc c2 b7 e5 9b fe 32 9f f4 bb 06 15 7f 9b 3c ed 48 1d 9b 9f a9
#> [176] 9e db cb ce 9b 9c d5 a3 84 6f f1 59 1c b5 ff dd fa c5 f2 b3 0a 35 9c 11 d7
#> [201] 93 d2 7f c1 1d e3 51 bf ad 9f 68 9f 7a e5 5e cb a3 cd 1b e0 a2 f5 85 d4 49
#> [226] f5 d5 a0 e6 8f d4 a7 dd 27 1e 92 ff 9b 7c a7 f9 2d 7d 12 fb 5b f4 58 dd 5b
#> [251] 9d 24 8f 11 a7 a7 70 6e f9 84 df f3 bc cd 13 ca db 1c b7 fe 4c 73 96 f2 8c
#> [276] b7 44 4e ec 36 7c 8e fb cd 1f e0 c0 e6 93 f6 9f cd b1 02 65 1e 89 63 c1 b5
#> [301] 9e 4b dd b4 5e 96 07 ca 6d c2 67 5e e7 b9 e1 af f6 bf 0d 0f 69 fe 24 3c 98
#> [326] bc e6 d3 f4 4d 6a b8 9e e7 d4 67 76 0b e7 a6 8f 7c da e7 1c 60 fe 6c 9e 59
#> [351] bf 16 e4 ac ff cc 1f ea b1 b8 d2 7c e1 7d ce ad 12 39 c1 8d ea e5 b7 e5 3f
#> [376] 9d 5b 9d cd 7f eb 1f a3 35 28 fb c9 e6 91 cd bf f0 8e b5 f7 b0 44 0e 38 62
#> [401] 9e 89 ff 58 d7 30 37 55 9f c5 57 f8 b6 39 66 ef df a4 ec 17 e2 cf f2 c9 79
#> [426] 2b f2 09 17 cd 2f de 33 7c 1a 3f bc 67 87 df cf a0 5f eb 97 f2 0d 1a fd 11
#> [451] dc 44 dc da bb 82 b8 22 8e cd 7e ea e7 83 b8 fc f1 6c ef ed af 7b d1 e9 cf
#> [476] 61 79 e4 53 e5 ea ef e7 f7 a2 33 cf ff 7b ef 56 f1 1c ad fb ad ec 9f f5 9f
#> [501] 6e ab ff a5 f1 58 5e 26 fe ae e5 c7 6b c9 c7 b5 e8 9c 57 d7 d2 77 2f fd d6
#> [526] a7 ac c3 bf f6 f3 d5 fc b1 bd 29 ed 8d 69 cf b1 bd 8f 7b 48 da 03 f9 6e c9
#> [551] ff 24 b5 3b a9 ed 3f 93 da 1e 40 fd 7c 57 4d 9f fc 2f 6a fb 95 c5 1d f6 a1
#> [576] b6 57 90 5f 38 e7 fb 3d cf b9 e7 d9 7e 68 75 80 7c ab 83 ed 07 a4 b2 af 34
#> [601] ff 4e 22 c7 b8 88 2b 8b 9b b8 b7 7d d2 f6 e1 b0 8f 6a 7e 4a e8 16 f8 86 b7
#> [626] 41 9b 7e ee e5 d8 1b 6d 3f 6d 7c a9 b7 fa 67 f7 64 bf b6 fd b2 f9 69 75 2b
#> [651] 9c db fc b2 39 70 74 3e ad 22 47 7c d8 9e 0e 3b 8d bf ed cb a9 bf 36 bf 87
#> [676] 9c fd 7f 89 73 4e e2 d3 39 2f 79 6e 76 ad 5f 07 35 bd 86 53 ed c3 ba 94 8b
#> [701] 7d 21 f8 8b 75 28 91 33 79 d4 a9 c5 65 f7 64 0e 6b 9f 5a 3c ac 3b 71 6b b8
#> [726] b2 3c 59 bd ad 4f 2d fe a3 38 63 1f da 5c 0a fe 6b de 0d 47 e8 cf e6 97 cc
#> [751] 05 ed 13 ea b5 fc d9 3d f2 11 bf c6 97 70 66 7e 33 be b4 57 24 7e d2 63 79
#> [776] 3e 3a c7 89 3b a9 3f eb 6c f8 4d ef 10 fd 6c f8 b1 f7 0c 38 6d 75 63 1e 52
#> [801] 1c f6 1e ac 07 e5 ac ff 53 1f a5 79 60 ef b1 cd c1 10 47 eb 0f f2 0b f4 68
#> [826] 7f d9 fc 17 39 ea 63 7e 75 8e d9 1c 30 fb 94 63 3d e7 b9 e1 26 d5 67 f0 ff
#> [851] 00 a5 12 15 25
#> 
#> $precompute_4
#>   [1] 78 9c bd 97 4b 8e 14 41 0c 44 2d cd 0c b4 58 a0 5a d4 a2 2f c1 9e 1d ac 38
#>  [26] 01 48 dc 86 3b 70 04 4e c8 11 90 a6 33 4b aa e7 7e 44 8d d4 9f 8d 55 99 4e
#>  [51] a7 3f e1 70 f6 cf 0f 55 f5 54 cf ef aa 9e 5e aa aa 5e 7e 7c ff f6 e9 73 55
#>  [76] 7d ac 7a fe fd e5 6f bd fe be 2e 43 9e 87 ac 21 57 7c 9f 2e 72 3b b7 e2 fb
#> [101] 2c 7a 73 7d d9 ef db 79 da 9f e7 9a bf ab 48 c6 c1 f8 60 b7 f9 7b 82 a4 fd
#> [126] b7 da 63 fc ab ac 5f 44 3f 57 b2 bf 40 4a bd da 37 f5 58 17 c9 5f cb cf 59
#> [151] d6 0b df ac 73 41 32 0e da 9d 7a e6 37 ed d3 0f d6 67 ac 4f 7d bd 87 76 0d
#> [176] 07 c0 8b f6 47 ed f5 62 1d e6 3a 70 d2 fc 46 5c db 79 e2 02 79 36 3b ea af
#> [201] e0 91 7d af b8 e4 3e ed 32 0e f4 57 f3 77 bd ae a7 eb e6 4f 61 bf f6 7a ed
#> [226] 5e c6 6b 78 61 3e 25 1e cd 1b 79 c6 f8 59 ea da fc 94 78 8d 6f 23 5f 59 1f
#> [251] 30 ef 85 fd 45 f4 e8 ef 38 67 bc 13 eb 9b fc ad fd 7a cb c3 dc 4f 7d 67 7d
#> [276] 6c 7e 4a bf e8 fc 31 3d da 27 1e 79 fe a0 1f ad bf a7 04 fe 9a bf 21 bf 87
#> [301] e7 01 fd b2 f8 ac 4f 18 1f d7 2d 2f 25 eb c6 a7 69 4e b1 df a6 4c 3c 8c fb
#> [326] b9 6f f3 85 7e 34 9c b0 4f cd cf 35 e8 31 5f 86 8b c0 03 ca 7f 76 9f e1 d3
#> [351] f0 40 bd a3 f5 b2 3e 0b 7d 6d 7d a9 f3 c0 70 68 f7 30 2e da 37 dc 9a dd 54
#> [376] 77 8b 43 f4 6c 8e 18 af 2a 8f 12 77 43 bf e5 63 ae 1b af 10 67 d2 4f 2d 7e
#> [401] da 49 b8 33 de 3b cb 3e ea 11 e7 0a 71 52 90 92 af 96 77 c1 23 ed d9 39 e5
#> [426] 8b 84 c3 55 f6 03 cf 19 df b7 ba 59 9f 30 3e cb 6b 61 3d d5 55 e2 4b fd 6a
#> [451] fc 9c f0 aa f8 a9 eb df d6 87 36 87 b4 6e 8b e8 59 9e ce ff df 6f b8 33 fd
#> [476] 82 1e d7 87 54 bc 8c fd 5f af eb ef ff 3c 4a be f5 5e e6 2d e9 dd ca cf 47
#> [501] c5 b7 9d 3b ed cf cd 7a dd ca af ed 9e e5 98 5d fa 73 6b f9 e8 7a a5 fb 6c
#> [526] ff de 79 d8 ee a9 c7 dc 73 6b 79 ef fc dc cb be d6 1b 3c 73 af 3e 3c 1a 67
#> [551] e3 75 7b e7 d8 bc b5 77 22 e7 9d bd 1f ec dd c8 f7 71 7a 8f 9d 65 dd e6 a3
#> [576] bc 63 38 1f 6d ae e9 bb c2 de 87 e1 de 96 3f 79 c7 70 de a6 f9 bb f9 c9 3c
#> [601] 96 7c db 3b c7 ea c7 77 50 a8 6f cb cb 90 5a 07 d4 55 df 9d ac bb c5 1d de
#> [626] 73 cd 3e ce b7 7c db 7b 7e 91 75 8b 27 bc b3 1a 1e e6 3a fb c1 f2 61 fa c8
#> [651] 93 c5 61 fd a1 b8 29 7c 5b 3d ec 5c e2 9b a1 a7 38 b3 b8 e7 37 ef c7 39 ed
#> [676] af da eb 45 fc 86 f8 23 df d9 fb dc fe f7 58 5e 13 2f 30 df e1 7f 54 b3 6f
#> [701] f9 64 7f 08 7f 1f e6 8b a3 fe 18 9f 2e 61 dd be 69 8f f3 8a f9 64 5d 8c 9f
#> [726] 98 1f c3 3d ed d5 90 92 c7 86 2b e1 1f e5 13 ea 5b 1c 96 1f e3 0d c1 ad f2
#> [751] 8a f1 02 71 63 f5 48 fd 92 f8 38 f5 59 9a 0f ac 37 65 41 cf 70 6c 71 14 d6
#> [776] 2d 8e ba fe ad b8 33 7f 0c df 47 e3 b1 7d e6 89 eb 86 7b e2 47 f8 46 f1 67
#> [801] f6 59 27 c9 ab f2 9a d4 5b fb d3 f8 e2 22 7c 1e 19 2e ac 8f 0b df ec 67 e3
#> [826] 5d e3 17 8b d7 78 26 f9 05 d9 e6 ee 94 c4 89 d9 33 7f 50 af c8 e3 c4 ef 94
#> [851] b8 ef 68 5d 75 de 1d ed 27 e3 ed 53 f8 36 3e 1f 76 fe 01 01 28 0b 41
#> 
#> $precompute_5
#>   [1] 78 9c bd 96 4d 6e db 40 0c 85 1f 90 a4 15 ba 28 b4 f0 c2 97 e8 be bb 66 d5
#>  [26] 13 b4 40 6f d3 3b f4 08 3d 61 8e 10 20 d0 18 d0 47 7f a6 94 d8 d6 86 e0 0c
#>  [51] 67 86 3f 8f 4f fc f3 25 c9 43 1e 3f 25 0f 4f 49 f2 f4 fb d7 cf 6f df 93 7c
#>  [76] 4d 1e ff 3d 1f f2 f6 3d cf 90 58 ff f1 b2 96 63 9f fa 49 1e 17 19 d8 4d 90
#> [101] 7c 2f d0 8f d0 29 79 cf 72 be f8 7b bc 6c 57 f6 ed 3d 9e 83 9f e5 dd e1 1f
#> [126] cf cd 97 ed 78 9f c6 7b 5c af 97 78 82 75 be c3 bc 0f c9 bc 4f 58 b7 3c da
#> [151] fd e6 3f e4 e9 9e 71 1e f1 69 dd 70 bf e2 d2 ec e4 7e d6 cb ea ad fe ce d8
#> [176] 67 bf 4d b2 ce b8 0c 5f 1d 3e ed 7e c3 79 16 c9 3a 33 8e 21 0d 8f 11 d9 f4
#> [201] 89 fa fd de 7c 08 7e 8c 77 4a 3d a5 2f cb bd c6 53 b3 e8 cc 13 f1 60 7c 64
#> [226] f8 e0 ba ec 97 be 31 fe c8 22 f9 3e fd b3 be 24 9e 70 4f a9 db b0 33 de b3
#> [251] 75 c6 6d f9 e5 79 eb 03 ab 2b ff 5b 86 9b 2e 5f b9 2c cb 3d 59 eb fa 8e fc
#> [276] 0f 94 e7 27 59 5f a4 f6 81 e1 cb fa 6e 16 c9 f7 27 d9 b7 ba 09 8e 0c 57 05
#> [301] f7 cb 7a f1 0b 71 95 3c 70 dd ea cc f5 e5 7c 8b 13 ea c6 07 88 a3 e5 fb ae
#> [326] ce d6 0f c6 1b 81 9d e1 dc 70 d6 f0 48 b1 17 5e 2d 71 db 3a f9 cd f0 6a b8
#> [351] cd 7a 9f 79 db cc 4b 58 d7 7b 84 8f 3b bd dc 8b 75 ad 4f ce 4b e5 81 a1 33
#> [376] 3e ab b3 e5 9f 7d df fd b7 0c 27 96 d7 61 37 9d d7 0b fe a5 ff ad 4e ea 97
#> [401] f5 27 f6 b5 af f6 e6 8b f6 ac 8b c4 af 3c 98 46 4a 7d ec 7d e3 e5 52 6f 39
#> [426] a7 fc 44 3e 36 fe 35 bb 88 4e 5c 05 3a f9 99 e7 8c c7 0d 57 56 57 f2 a3 fc
#> [451] 57 88 a7 0f f3 02 f3 6d f8 de f8 5f 6a df 95 ff 8e e1 58 f3 96 f5 fe df 37
#> [476] f9 f9 ff bd e4 de 77 89 0f b5 cb e5 fd 7b c9 91 e7 dd e7 e0 ff a8 f3 b5 fc
#> [501] da eb df ad f1 31 70 7b ad fb 3e 1a 8f e5 bb c3 dd b5 e4 bd de b9 b6 bc 15
#> [526] 4e 4f f7 df 08 27 5b eb fd de 7e de ed 8f bc 53 e6 91 e3 79 bd f0 3d ed 22
#> [551] ba cd 13 36 37 d9 bb f6 3f 0a ec 30 c7 94 75 da 07 52 fe 67 65 3e e2 9c 4d
#> [576] bf ec 7f ba d8 97 3c d8 fc 20 fb 3a 27 71 5e 30 1d fe 6d 9e 13 64 0e d6 b9
#> [601] 2e 62 27 f3 99 c6 c7 f9 d1 e6 3f f3 6b 63 fd 0c 9f 3a 9f f1 1e db b7 fa d3
#> [626] ae eb ab 66 8e 2d 75 b4 39 98 f3 ac cc 8f 25 1e ee 9b 6e f9 e4 7b d6 6f 94
#> [651] f3 46 9d 75 b7 7e 0c f4 26 0e e5 2b dc 53 e2 65 de 1a be 63 bd 5b fc 36 bc
#> [676] ad 76 cd 79 ed 67 f1 b3 e4 9d fb 59 4b c5 29 f3 18 91 b0 2f 71 75 fd 1d 91
#> [701] 72 6f f1 97 fd 73 90 75 c4 cf f3 c6 03 96 17 cb 63 89 8f 7e 04 3a f1 69 ef
#> [726] 8f 73 52 c7 e2 9f fd 0f 58 1f e1 39 e6 a3 c5 a1 ad 37 7c a9 f1 74 ff b5 86
#> [751] 7f 95 ff 82 fd a1 37 38 50 de 34 9e 13 be b7 7e db bc 6e 3c d5 f5 2d fd b6
#> [776] ff 90 e0 a1 e5 a7 61 47 1c 8f f5 ad fd dc e4 a3 f8 6f 79 68 e2 50 3c 1c c4
#> [801] ce ea 1c e8 07 d9 1f b2 f9 1f b5 7d 44 3c 1b 0e e9 07 df 0d 24 e3 b5 7e e0
#> [826] 39 79 bf 9c 33 bf 27 e8 c6 e3 86 2b c3 d1 d8 3f 6c d4 8d b7 67 59 37 1e b3
#> [851] 7c 5b df 30 9e 65 ff 15 e9 47 22 c1
#> 
#> $precompute_6
#>   [1] 78 9c d5 97 cd 8d 13 41 10 85 9f b4 bb 60 71 40 3e cc a1 93 e0 ce 8d 3d 11
#>  [26] 01 48 64 43 0e 84 40 84 84 80 c4 4e 5b 9a af e6 53 cd ae 6c 4b f8 52 ea ae
#>  [51] 9a ae bf 57 af db 3f 3e 24 79 c8 e3 bb e4 e1 29 49 9e be 7f fb fa e9 73 92
#>  [76] 8f c9 e3 af e7 bc fc 9e c7 8b fc f2 67 5d cb 7e a7 9f eb 8b 7e c1 9a fb 27
#> [101] 48 ee 9f e5 9c 65 5f 5e e2 a0 fd 8c eb 0c bb 79 fe f4 17 b1 63 5e 63 7f 5f
#> [126] cf e5 9a f1 4d fd 80 dd d4 2f b0 c3 39 ec 4b e9 d7 b4 47 1d ca b9 d4 67 95
#> [151] 8c db f2 63 3c 66 47 7f f4 6b fe f8 5d 56 69 78 39 35 12 f5 2e fd 3e 89 be
#> [176] c3 db d2 ec 1b ee 6c 0e 06 f6 57 7b ad b3 49 f6 55 e2 23 6e 8a 1f e6 27 f5
#> [201] 29 f9 4c 29 f3 a3 79 41 af f8 48 b3 ee f8 4c e6 be d8 5b 7f 3a 3e 34 fc 12
#> [226] ff 86 63 d8 17 3f e7 7d 3b ad 4b 37 ef d8 2f 75 b0 79 35 de 33 fc 21 3f ab
#> [251] 3f e3 2b fc 66 73 35 a5 e1 b5 8b d7 e4 3c b7 e1 89 32 bf c6 3b f4 3b 44 2f
#> [276] df 17 3c c0 9f fa e9 f8 6c 4a e3 61 7e 3f f6 f5 ca cb 86 f3 29 8d df e4 be
#> [301] 29 78 a1 b4 7b 85 7a c3 65 c3 eb ed 5c 52 5a 1d a9 67 bd 82 35 f2 69 e7 f4
#> [326] 28 2e 79 be f5 35 b2 df f1 a4 e0 b1 d8 21 2f c5 7d 87 4f c4 6b e7 94 fa 59
#> [351] 1f 58 5f f3 7b 12 3b 9b 2b c3 b3 d5 8b 7d 03 ff 1b 8f 94 f3 bb fb 80 71 66
#> [376] 2b e9 a7 d4 31 5b bd e5 51 70 45 7e 10 9e 54 1e e4 b9 82 6b e5 ef 40 1a 3f
#> [401] 4c bd cd 19 eb 60 f1 0b bf e9 9c 0f 91 86 53 e1 85 a3 3c 57 f0 6c fc f2 da
#> [426] fc b2 95 25 1e c3 4d a0 37 9e e1 39 36 cf 32 8f 2d ef 31 be 6c 65 c9 d7 e6
#> [451] 97 fd b5 fa 5a 1e 91 b5 e4 53 ea 4c 69 75 10 dc 59 bf cb 3c b1 ee e6 37 b0
#> [476] 63 fe ab 7e fa fb f9 4f be ff 7d 2f 39 e3 39 6c 8f be 74 76 d7 8a f3 ad f2
#> [501] ad 75 65 5d 6e d5 9f a3 e7 de ca ff 25 df 3b f7 ab cb c7 f0 f5 5a bc fe 2f
#> [526] f5 b8 96 9c bc 72 ad f3 ca f9 37 aa bf e1 81 fe ee d5 17 ab a3 be eb e4 9e
#> [551] 2b f7 89 bd a3 03 c9 fb 8d ef a2 71 70 7f 3d af c4 61 ef 47 c6 b3 c8 3e fc
#> [576] 96 fc ec 3d 61 f7 3c 25 df 6b 76 ff ae 6b 7d c7 ce 35 df 47 ec df d1 f7 a7
#> [601] bc 3b 4b 9f 82 fd 75 5d fc da bb ac 7b f7 1d ad 87 bd 93 0d 77 d6 d7 60 7d
#> [626] 6e 24 eb 18 b1 eb fe 17 58 dc 66 2f ff 0f 4a 9d 64 4e 74 fe d8 07 9e 4b 29
#> [651] ef cd d2 97 c0 ce e6 ad c3 ad bc cb f9 5d c9 c7 de a5 8c d7 f8 6a 11 7d 93
#> [676] b7 cd 4b d1 cf 7d 9b 37 c9 97 e7 eb 5a 78 ad c4 37 f6 ed 14 df eb ba e5 7d
#> [701] 3b 47 fa 63 fc dd e2 35 d0 63 dd f2 b7 f1 a7 e1 45 fa 5f fc b0 5f 88 bb dd
#> [726] 37 de 69 e2 2d fd 95 fb db 78 41 e7 91 7d ee e2 a6 5f b9 0f 74 7e 24 6e eb
#> [751] 83 f2 81 d5 2f ab 94 73 ca f7 8c df ee 2b e1 31 ed 4b c3 53 45 9f ed be c6
#> [776] c9 f9 ee ee 0f c3 73 c3 03 ca f3 f4 d3 7c a7 7c cc 3a 45 24 fa 6e 73 6f f8
#> [801] 2a fe 6d 9f f1 d8 7a 34 fb 9d 9f 6c f5 ec 77 27 6d 4e db fb 9c 75 36 de 34
#> [826] 5e 96 79 b3 79 3c 3c a7 36 67 56 5f 7e 67 75 b6 3a 71 8e 0c 87 86 ab a9 37
#> [851] 3e 1d 62 17 91 9c af a6 ae c6 5b ca b7 38 f7 2f bf cd 15 ad
#> 
#> $precompute_7
#>   [1] 78 9c bd 96 c1 6d 1b 41 0c 45 09 d8 4e 16 39 04 3a ec 61 9b c8 3d b7 f8 94
#>  [26] 0a 12 20 dd a4 87 94 90 0a 53 42 00 7b 29 40 8f 7a fe b2 61 49 17 62 66 38
#>  [51] 14 f9 f9 f9 67 7f 7d aa aa bb ba ff 50 75 f7 50 55 f5 f0 f3 c7 f7 2f 5f ab
#>  [76] ea 73 d5 fd 9f c7 7a fe 3d 6e cf f6 db bf 7d bd ec 76 c5 fe 06 5b a7 7e c7
#> [101] fd 5e 2f d8 3f 9c da 8e cb f8 e3 ff 0a fb 0b ec 7e ce b8 c7 ff 63 5c e6 57
#> [126] b2 cf 7a 57 f1 6b db ff 57 72 ce fb 88 6b f5 8d bc c5 1e fd 0a eb f6 03 1e
#> [151] c7 35 f3 a7 df 06 bf 55 ce 05 ff d1 4f e2 4e 3e ed 96 f5 f0 de c0 eb 70 de
#> [176] 6f fc 2f fb 54 38 37 7e b5 05 9e 23 4f ab 9b f9 a5 3e b2 0f c4 dd e2 18 0f
#> [201] 8d df f4 eb fb c2 ab 98 af f0 69 cc 7b ea 97 59 c9 5f 75 ca f0 22 df 39 6f
#> [226] 36 2f d6 f7 b6 a6 93 bb 1d f7 18 bf f7 d9 2f e2 4d 3e 1c b0 6f 75 19 cf 99
#> [251] af e9 e9 0a 3f c9 53 75 65 bf a7 38 17 ec 41 2c 79 63 3a c0 fa b8 36 9e 30
#> [276] 6e e2 47 e1 dc fa 13 74 43 75 ca fa cb fc a9 07 85 b5 cd 3d eb 93 bc c7 3d
#> [301] e1 ef c0 a9 b0 de e0 67 7d e9 7b a6 73 cc db f4 69 7b d9 6f e0 6b fa 9a f8
#> [326] 60 fa 52 62 99 27 79 4b 5e a0 af e3 5e c1 26 1d b2 7b e4 8b bd 43 85 b5 f5
#> [351] b7 60 4d d7 8c 17 c0 97 71 87 3f fa 15 f9 68 f5 da 5c 99 ee 1a 9e a6 ef a6
#> [376] 7f a6 17 8b ec 1b de 36 d7 c4 d1 e6 97 7c 5c c3 be e0 a9 ba 89 73 9d 4f c3
#> [401] 57 74 82 71 46 fd 05 7b a9 1e b4 bf f0 83 b8 c5 7e 30 2e ff d7 78 bc 9d 5f
#> [426] 27 7d d0 77 c7 74 c6 e6 a3 ef 2f 61 bd 85 75 5b ce 87 cd 17 f3 2c 9c d3 af
#> [451] cf 45 3f 35 be fc 1f 79 ac bc 2e 58 e2 97 70 b3 75 98 67 eb f3 e8 3b f3 b0
#> [476] bc d2 fb 21 7d d2 79 4b fa 6b 3a bb 84 7d f0 f8 f7 d3 ff 7f fc 7b 2b db f9
#> [501] 5c ec 0f 9c d4 6f 79 5d dc 6b d9 ce f7 d5 f7 90 7f aa f7 cd f9 5d 88 d3 b5
#> [526] f1 bc 56 7d 5a 4f e8 8b f1 f2 56 79 de ea 7f de db 5e 9b 27 d7 8a 6f fd e6
#> [551] fe ad 74 d2 fa 3f f4 5b 74 3c be 17 bc cf f7 a8 c2 7e 5b e8 b1 7d 87 8e f7
#> [576] 1e ef 65 fa 1e 8b df 89 f6 5d 93 be 37 88 17 df 49 da 3a 6f 47 1e a9 ee 55
#> [601] d6 86 67 fa 9e 24 5e c4 c7 f0 20 7f b6 b0 46 5c ad 8f df d9 89 6f c6 e3 90
#> [626] cf c8 83 3c b0 79 48 75 da fc 58 7c eb a7 f1 72 91 f3 45 ac f5 bd 2d f3 96
#> [651] f8 83 0f ec 53 9d 9e 6b ff 52 1d bb d5 b9 36 3e 22 1f cb 77 f4 8d bc b2 ef
#> [676] 67 ce 09 fd 2c ce 7a fe 7c e4 69 71 db 22 ce b8 27 38 46 dc 52 de 89 bf c8
#> [701] d7 74 3c e9 8e ea 15 6d df 27 ff 98 b7 e1 6c 38 19 1f 53 3e 49 d7 4c 0f 58
#> [726] 0f f1 36 9d b3 38 fc 1f ce 61 ef 5b 9f 8d df 36 cf c4 df f4 4c e6 df de 3d
#> [751] f6 c3 fa 6b 3c b3 77 6b e4 c1 fc 05 07 e5 8f f5 a9 64 df fc 2c ff a0 7b 36
#> [776] 7f 3a 9f 8b ac d3 7b 68 7c b1 7a d8 4f 8b 6f fc 35 1b 74 c9 de 21 eb 57 c4
#> [801] b9 e0 d7 71 89 07 e3 17 d6 8c 5f 2f fb 5d ca f7 81 23 79 00 fc ac 8e d1 17
#> [826] e6 4b dd 31 be da fc f7 3d 9b 07 d6 5d 58 0b 0f c6 dc 9a 1e 99 bf e1 66 df
#> [851] 29 58 0f dc c2 9c 0e ff 82 1f f1 0a fa 69 fc 88 3c d9 ed 7f c7 d5 0b d0
#> 
#> $precompute_8
#>   [1] 78 9c bd 97 41 6e dc 30 0c 45 3f 90 a4 1d 74 51 78 31 0b 5f a2 fb ee 9a 55
#>  [26] 4f d0 02 bd 4d ef d0 23 f4 84 3d 42 81 c4 32 e0 c7 3c d0 4e e2 99 0d 21 4b
#>  [51] a2 c8 cf cf 2f cd af 4f 49 ee 72 ff 21 b9 7b 48 92 87 9f 3f be 7f f9 9a e4
#>  [76] 73 72 ff e7 71 ca d3 ef db bf 67 fb 98 c5 4e b0 73 33 7f c1 bc 8d 71 de 7a
#> [101] ae f9 0f d6 5d 5e 9e 2f df 97 f1 ba ef 0a 1b f9 3e ec bc 1d 17 7c 2e 5b cb
#> [126] 79 1b af df 89 2b f1 0a e6 19 37 f7 2f b6 e0 49 9c 86 1f c3 87 f1 58 9d 59
#> [151] 2f 9e 8f 78 4b fd 2e db 75 ca 3f 8e ad be d9 7e 2f f1 32 6e ae 93 7c 4a 7f
#> [176] 34 eb 4a 5c a8 6b c1 87 79 5a 3d bb 3c 88 23 f9 34 c3 1a 7e e4 19 f2 d5 be
#> [201] 65 ff a0 5e 6d bf 0b de c4 ab d3 29 cd df 78 2b 7e 8d c7 d6 67 da d7 3c 6f
#> [226] d8 06 67 d6 b5 8c ad 5f 85 8f 65 fd 41 5d 61 5c a5 0e a6 97 ac 03 f9 d1 e8
#> [251] b9 e2 bc b3 be 7a 6f 98 7e 9b 2e 53 7f ae 2f cf 97 f3 10 77 ab b7 5d bd 4d
#> [276] d7 26 59 67 e7 37 fd 50 f2 61 5c c0 ad f4 b5 e0 62 7a ad f3 76 7f 31 4f f2
#> [301] ce fa 52 f6 a9 1e 18 1e 86 bf e9 b7 f1 2a 8b bd ca d8 fa 3a 18 37 f7 48 e9
#> [326] 77 89 a3 e3 87 ea b1 f1 98 f1 99 4e 04 eb 88 07 e3 e9 fa 4b e2 66 7e 16 bf
#> [351] f6 69 16 4b 3e 58 5d 22 56 ea a2 fc e2 7a e0 ac fb 38 2f 75 68 ef 15 8b 27
#> [376] 8b 65 9d 6d 1f fd 9b de 59 5f c3 7f 57 cf 82 0b cf b7 7e 45 bf 15 9e 5a fc
#> [401] c1 77 9e 23 ba ac 3a 22 79 1a 9f 2c 5f e5 47 30 66 ff 75 f9 05 d6 f4 8d fb
#> [426] 3a be 71 3d fd 58 df 77 75 96 fd ca f7 6c c7 aa 7f a2 47 05 3f bb 07 18 5f
#> [451] f0 dd fa 04 79 ea b9 c6 43 e2 4b 3f c1 78 af 8e cf 62 2d 2e b9 3f 55 6f 03
#> [476] 2b 79 fe 7e 5a ff f1 ef ad ec 88 e3 e8 fa 6e df 51 bf 67 d9 81 ff 61 5c 50
#> [501] 8f d7 fa 39 7a ce 5b d7 bd 3a 8e e9 5c ff 47 f3 b1 f9 b3 71 58 cf b9 de e6
#> [526] 9c f7 b6 67 f1 74 c5 e5 24 9e 58 dc 43 2f d7 f1 ad ea 2f fa 55 de c9 bc 67
#> [551] 83 31 df 87 98 d7 fb 19 f7 4e fb 6e c8 62 f7 be 67 79 bf db 3b 84 f7 18 f3
#> [576] e1 7d 18 8c 11 5f b9 0f e1 4f df 37 93 d8 c0 76 ef fa b1 0e fe 4b 7e c1 77
#> [601] be 33 78 8e dc ff a5 ae f6 7e 18 fb ac 6e 86 77 f7 4e e2 d8 de 71 f6 ce e3
#> [626] 3e f1 43 7e 16 3c b9 2f 18 1b ee f6 de b4 7a 76 7d 66 fd c0 7a 36 7d a5 f5
#> [651] 34 5c 9b be 51 de d3 8f f1 1a 38 97 3e 63 dc 32 56 1d a2 c5 f9 05 67 a9 83
#> [676] fe 5f b8 34 df 3b 9d 20 3f e8 a7 fb 7f 31 d6 13 5f e0 ae 7a 60 f1 0b bf 8b
#> [701] 3f eb e7 6c d7 15 9c 31 bf b7 4e 25 cf ae 0f cc 6f 60 6d 5f a7 db 86 13 2d
#> [726] 71 32 be 32 3e c9 a3 d5 2d cb a7 e3 ab f5 3f 79 63 ba 30 fc e2 1c d5 33 e2
#> [751] d0 f4 4f d1 63 c4 ad 3a c1 73 4c f7 ac 9e 8c c7 74 88 fe 88 b7 f0 49 fb 91
#> [776] 71 98 2e 70 bd f1 b1 cb c3 f4 86 f9 41 07 0a ae 8d 2e 30 be 56 b7 f7 de 57
#> [801] a6 4f c6 9b 60 1e 7c 2b fa 4f 3f e0 5d 8b 47 17 8f e0 6b fd 52 fa 86 fd 12
#> [826] 58 eb 77 e9 8f 52 17 eb f3 2e 2e f2 ae d1 99 c2 0b f2 09 fb ca 79 cc df be
#> [851] f3 5c eb 9b a3 fc 99 e5 bb f1 d6 f0 31 3e 5a de 56 7f e4 f5 1f 04 74 18 13
#> 
#> $precompute_9
#>   [1] 78 9c bd 97 41 8e 14 31 0c 45 2d cd 0c 94 58 a0 5a d4 22 97 60 cf 8e 5e 71
#>  [26] 02 90 b8 0d 77 e0 08 9c 90 23 20 8d 92 96 f2 5c 6f 5c 3d 33 d5 bd b1 12 a7
#>  [51] 1c e7 fb fb 27 fd eb 53 44 3c c4 e3 87 88 87 a7 88 88 a7 9f 3f be 7f f9 1a
#>  [76] 11 9f 23 1e ff 5c d6 78 fe 5d 16 d8 e8 b6 fb bf fd 9b ed a5 cd fe b1 3e f9
#> [101] 25 de 65 9b c7 d7 ef 36 d8 36 8f 35 8f 98 d7 d9 f7 d7 fd 57 59 d7 ad ee c3
#> [126] 73 33 6e cc f3 d7 ef 89 c3 02 ff 2a f3 db fe 38 e1 b6 cc f3 dc 2f ed d3 e7
#> [151] 0d df b4 6e 91 75 63 5e f8 a0 fc d8 b0 8e f8 58 1d 86 df ea d8 fd 8a 0b 71
#> [176] 6b fb fe 6b 3c 7e 1f e2 6f 32 26 3f 69 81 ab f2 d9 fa 89 f9 5b 3d 2d be f5
#> [201] 01 f3 b2 fa 17 fd 6b eb 52 7d c8 87 61 ab 3e 83 55 fe 5a 1c f6 1b cf 7f 50
#> [226] 17 55 7f 2c 5f f0 3b f9 ad cf c0 47 ed 0f c4 e1 f7 ca 7f d6 c1 78 be 1e f3
#> [251] 33 af c4 13 8b 8b 3a a4 f3 b5 7d ab e7 02 ef 2b fd 32 5d 4e f5 65 7e a2 c3
#> [276] a9 4e e4 47 a5 87 96 47 60 6c e7 ae 74 c1 78 2b f7 45 75 3f 29 1e c8 33 d5
#> [301] ab e0 4f 3a 37 71 c1 39 95 af d5 39 62 1e 6b 9f 55 71 d8 b7 e4 7d 8f 93 70
#> [326] b0 fe b0 78 fc ae e2 69 74 2b f7 46 aa 47 60 6c 7d 22 38 a6 ef e5 fc 29 9e
#> [351] e9 b4 f1 38 ba 35 9c e8 17 7e 27 5e 31 ce d1 7b 93 f8 9a 6e 17 7a a6 ba 61
#> [376] f8 48 ff d2 9f f6 af f8 26 75 38 aa 3b 89 0f d8 4f f3 6f 85 ad fa a1 c2 d3
#> [401] 78 ce 79 cb 07 7c 4a b8 ae 32 16 1d 57 1c 18 27 e6 71 d2 1d e8 40 3a 7f d5
#> [426] 27 cc d3 f4 cd f4 c3 f8 19 f3 7c 8a cb ef 63 b6 47 d7 95 f5 a4 9f 71 16 f1
#> [451] a3 ee 86 a7 f2 cd f4 1f f3 a6 57 5a c7 f6 f2 bc e2 c1 ef 02 56 ce 6d 3a c7
#> [476] fc 52 3e 76 5f 30 be e9 51 c0 4a 9d 7e 3f c7 fd f8 f7 5e f6 d6 7d 89 83 ae
#> [501] 8b 97 fd f7 b2 a3 4e 6f c5 e5 ac f3 0c 1e 94 eb 4e da ff d6 3c de cb 56 bc
#> [526] b3 f3 de 2b cf b3 f1 3e cb 9e 9d 77 d5 f7 af b5 d6 a7 dc 6f e8 e5 7b ed ab
#> [551] e7 8c fd 7d f4 fd bd 14 e3 80 e5 ff 9d 31 2f f7 92 be eb 38 66 5c 8b 27 f7
#> [576] 52 7a c7 f1 fe c3 ba f4 4e b0 ff 2d d5 fb e3 46 3c ca f7 bc e5 4f 1c e5 ff
#> [601] 10 e3 57 ef 5b 3d 8f bd 57 57 19 23 bf b4 af bc fb b4 6e cc df fe 6f 54 ef
#> [626] d1 61 8b f7 b6 e1 a0 bc 23 7e 8c 3f 6c 93 75 c2 77 8d 47 3e d8 fb 79 8c ad
#> [651] ef d6 c2 6f ef e9 8a 1f 81 31 eb 24 fb d9 7b 5e eb cf fd 8a 75 e9 9d 2d 79
#> [676] 1d c6 1d 75 d3 77 3c e2 50 0f 2b de 27 7c d8 3f c0 81 79 a4 bc 58 17 d3 69
#> [701] ee 4b 9e 59 5f d8 ff 06 d1 cd b4 ef 58 2f f7 43 e2 e3 f0 57 ba 62 7c 12 3d
#> [726] d5 7a 16 f1 4b 1d e0 77 5b 31 96 ff 67 8a c3 b0 c5 7d 60 b8 95 71 ad 5f a9
#> [751] 2b 72 2f a4 f8 36 1f dd 1e bd 77 fa fa 84 5b 75 4f 98 bf ba 77 84 cf 5a 3f
#> [776] 5a d3 6d d3 01 cb 53 be 4b 79 53 ef 4d cf aa fd 03 7e 8b 67 79 50 bf 2b 7d
#> [801] 2f f8 61 f8 9b 4e 27 1c 03 76 dd 5f 67 7a 93 f4 71 3d 38 2f f7 9c d6 35 30
#> [826] 8f 71 da af 88 ab fd 66 75 5a c5 12 07 9e cb 70 6c fb eb 34 1f b9 f7 52 3c
#> [851] c1 2f e5 17 dd 36 19 d3 f2 3c ac cb 56 d8 83 38 e8 f9 59 4f c1 45 f5 93 fe
#> [876] fe fd 7f 12 cb 24 6c
#> 
#> $precompute_10
#>   [1] 78 9c bd 97 4d 6e 14 41 0c 85 9f 94 04 46 2c 50 2f 7a d1 97 60 cf 8e ac 38
#>  [26] 01 48 dc 86 3b 70 04 4e c8 11 90 92 ae 91 fa f3 7c 72 4d 94 99 d9 58 ae 72
#>  [51] fb f7 d9 ae f9 f5 29 c9 43 1e 3f 24 0f 4f 49 f2 f4 f3 c7 f7 2f 5f 93 7c 4e
#>  [76] 1e ff 3c 9f f2 f2 7b de 76 ba 82 cf 4e 87 dc 02 3a ce d7 cb f4 db 3f d1 43
#> [101] 7b eb 51 ee fc dd 72 bc a7 be 22 b7 c8 f9 7a 59 8e 76 4b 5c 11 9e 7a b6 a3
#> [126] dc b0 7f f6 63 dc 43 9e 72 fa 9d e4 e9 ac 6f f0 1b e8 2a bc f8 7d d6 63 f9
#> [151] 62 bd 69 8f 79 65 dd 4e a0 1b ee d7 e3 7d 9b 47 f1 4b bf 33 7f a1 87 fe 16
#> [176] ff 3a 3c 91 5a ff 64 a7 cc 43 20 c7 fa 30 8e 4e bf c5 67 78 60 dd 60 4f fb
#> [201] 30 a0 98 23 05 07 0d 6e 74 fe 04 3c cf 07 a5 bf b4 37 e4 80 e7 82 9f 21 27
#> [226] f8 35 fc 15 7f 3a 7f 51 e7 6e 7e e8 1c 92 3e 2a 78 62 1c a6 d7 e6 8c cd 0d
#> [251] db 23 e6 3f ef c5 6e c9 87 ed 9f ae af 73 3c 2f f8 b3 79 bf 89 1c f9 d9 7e
#> [276] 26 6f 75 ce 91 6f e7 9b c5 65 75 6e e6 9c ed 59 ed 0b c9 c7 34 ee 02 de fa
#> [301] 42 e6 a2 f6 5f d7 bf d0 53 e6 90 e1 c3 28 f5 18 fe 25 6f cc 7b 89 cb f6 8b
#> [326] e1 d0 fa e4 24 e7 af a4 7c af f3 51 e6 6d c1 69 8e 54 e3 b4 3d 64 fb 35 a0
#> [351] ac 37 f0 ab 7e 2e 97 f9 69 3c 75 fa 03 de e6 98 ed 13 e2 c7 fa 7b 76 9e 49
#> [376] 7f 59 dd 2c 8e 16 67 f0 af c8 77 79 b2 79 85 3c 28 5e 66 f7 cb ce 77 7e e9
#> [401] 1c 1c 3c ec 17 7f 99 7f d6 6f d7 53 70 22 73 51 f7 06 ed 33 7f 90 b3 78 58
#> [426] e7 56 9f ed 23 c3 bb e1 77 d7 57 f2 b0 9f 6b dc f6 1d fc 31 1c 15 dc d0 cf
#> [451] e0 9c fc 49 ce 65 ef 15 dc ce e6 55 e2 d6 79 41 7b 32 3f 35 2f 90 b3 bd a6
#> [476] f3 6d 7c d7 cd b1 e0 3e a0 d2 d7 c3 ee ef 17 fa f1 ef bd e8 b0 3f 2d 8f f8
#> [501] 55 6e bd 4e ef ad e8 c8 fb b5 df b1 1e d7 e6 69 da bf 6d 4e ef ac dc 5b e9
#> [526] bd f1 d7 c5 33 fa af 9c df 09 57 b7 ce f7 ad a8 e5 ed bd e8 ad f2 af f5 c6
#> [551] f9 5b fb f9 bd e2 2c fb 4e de 35 ed 3b 94 fb d0 de cf dd 7b 8e 94 7b c8 f6
#> [576] 18 f7 b4 bd 3b ed 7d 23 7b b0 bc b3 02 5e de 75 ba 57 c5 9f 92 9f c6 7e d1
#> [601] 67 b4 7b e7 f0 3d 16 e1 8d 4a 7c 16 8f bd 17 ca 7b 4d ea 3e ad 17 38 51 9c
#> [626] 6f 72 6f ef 53 fa 29 f6 15 1f f4 33 b8 07 5f ea 6e f9 b1 ff 33 ec 93 40 6e
#> [651] f0 c4 81 e9 5f e4 dc be e7 3d eb cd 7b 9b 0b cc 7b 8e 72 25 5f d6 ef d6 6f
#> [676] 56 0f c6 c5 7c 32 df 76 6e 79 a0 bc e1 c5 be 93 bc e8 dc b1 b9 4e dc e2 be
#> [701] c5 e3 e0 6d be 20 fe a2 67 93 fb 93 50 da 21 5e 83 7b cb 93 ec 0d eb df 4e
#> [726] ae db a3 05 47 96 af 34 54 e6 7a c1 b3 f9 d3 ed c1 ec 14 79 2f fd 15 50 c8
#> [751] 29 5e 4c ef 90 b3 be 32 fc f3 de f0 64 f3 7b 93 7b e6 ef 95 54 dc b1 cf 64
#> [776] cf e8 7c b6 39 d3 e0 b1 d8 b7 ba db be b3 f9 40 b9 ae ff 68 d7 f2 c1 f8 72
#> [801] bc 2f 71 19 1d df 35 7b c4 f0 69 fd a2 f3 8e 7a ad 5f 04 77 05 df 90 37 bb
#> [826] 8a 5b c6 8b 7c ce d6 85 f1 f1 bb e2 b7 cd dd d9 bc 77 f5 eb fa 81 f2 86 c3
#> [851] 49 5c 6b 1f 58 3e 89 d3 fd de fa a3 ed 03 f6 29 eb 12 91 a3 bd 5d ce f0 56
#> [876] e2 94 be fa 0f 26 77 1a 9f
#> 
```
