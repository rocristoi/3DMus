import React from 'react';
import { Sky } from '@react-three/drei';

import BaseScene from '../ui/BaseScene';
import BaseBox from '../ui/BaseBox';
import BaseCharacter from '../ui/BaseCharacter';

const TopTracksTest = () => {

const pos = [
  {
   position: [-8, 1, 12]
  },
  {
    position: [5, 1, 10]
  },
  {
    position: [-3, 1, 15]
  },
  {
    position: [12, 1, -8]
  },
  {
    position: [2, 1, 4]
  },
  {
    position: [-10, 1, -5]
  },
  {
    position: [0, 1, 20]
  },
  {
    position: [7, 1, 2]
  },
  {
    position: [3, 1, -7]
  },
  {
    position: [12, 1, -8]
  },
  {
    position: [4, 1, -8]
  },

];

// Example spotify object
const tracks = 
[
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1Iq14y98EVmnXUah4ldJnl"
                    },
                    "href": "https://api.spotify.com/v1/artists/1Iq14y98EVmnXUah4ldJnl",
                    "id": "1Iq14y98EVmnXUah4ldJnl",
                    "name": "Babasha",
                    "type": "artist",
                    "uri": "spotify:artist:1Iq14y98EVmnXUah4ldJnl"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1QFgyLmmyAZTPn707dbQT7"
                    },
                    "href": "https://api.spotify.com/v1/artists/1QFgyLmmyAZTPn707dbQT7",
                    "id": "1QFgyLmmyAZTPn707dbQT7",
                    "name": "Ministerul Manelelor",
                    "type": "artist",
                    "uri": "spotify:artist:1QFgyLmmyAZTPn707dbQT7"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/3DEotmKWHGF5DUHwXfgu5Q"
            },
            "href": "https://api.spotify.com/v1/albums/3DEotmKWHGF5DUHwXfgu5Q",
            "id": "3DEotmKWHGF5DUHwXfgu5Q",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2730db5cd55f515b143cde25487",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e020db5cd55f515b143cde25487",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048510db5cd55f515b143cde25487",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "Păi naa",
            "release_date": "2024-06-01",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:3DEotmKWHGF5DUHwXfgu5Q"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/1Iq14y98EVmnXUah4ldJnl"
                },
                "href": "https://api.spotify.com/v1/artists/1Iq14y98EVmnXUah4ldJnl",
                "id": "1Iq14y98EVmnXUah4ldJnl",
                "name": "Babasha",
                "type": "artist",
                "uri": "spotify:artist:1Iq14y98EVmnXUah4ldJnl"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/1QFgyLmmyAZTPn707dbQT7"
                },
                "href": "https://api.spotify.com/v1/artists/1QFgyLmmyAZTPn707dbQT7",
                "id": "1QFgyLmmyAZTPn707dbQT7",
                "name": "Ministerul Manelelor",
                "type": "artist",
                "uri": "spotify:artist:1QFgyLmmyAZTPn707dbQT7"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 160450,
        "explicit": false,
        "external_ids": {
            "isrc": "ROGRA2400380"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/3BAZCKKEbilNdQgTSLBca9"
        },
        "href": "https://api.spotify.com/v1/tracks/3BAZCKKEbilNdQgTSLBca9",
        "id": "3BAZCKKEbilNdQgTSLBca9",
        "is_local": false,
        "is_playable": true,
        "name": "Păi naa",
        "popularity": 59,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3BAZCKKEbilNdQgTSLBca9"
    },
    {
        "album": {
            "album_type": "album",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5RqcTk3xp9dW1BLsdQ0NE9"
                    },
                    "href": "https://api.spotify.com/v1/artists/5RqcTk3xp9dW1BLsdQ0NE9",
                    "id": "5RqcTk3xp9dW1BLsdQ0NE9",
                    "name": "Aerozen",
                    "type": "artist",
                    "uri": "spotify:artist:5RqcTk3xp9dW1BLsdQ0NE9"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/0oAlEarGdHNBAUbkWwnhjK"
            },
            "href": "https://api.spotify.com/v1/albums/0oAlEarGdHNBAUbkWwnhjK",
            "id": "0oAlEarGdHNBAUbkWwnhjK",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27377ea5a7483bf059e985400de",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0277ea5a7483bf059e985400de",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485177ea5a7483bf059e985400de",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "NOTSOZEN",
            "release_date": "2024-09-13",
            "release_date_precision": "day",
            "total_tracks": 18,
            "type": "album",
            "uri": "spotify:album:0oAlEarGdHNBAUbkWwnhjK"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5RqcTk3xp9dW1BLsdQ0NE9"
                },
                "href": "https://api.spotify.com/v1/artists/5RqcTk3xp9dW1BLsdQ0NE9",
                "id": "5RqcTk3xp9dW1BLsdQ0NE9",
                "name": "Aerozen",
                "type": "artist",
                "uri": "spotify:artist:5RqcTk3xp9dW1BLsdQ0NE9"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/2QmCKCIIK7RGzYOvC7nAZn"
                },
                "href": "https://api.spotify.com/v1/artists/2QmCKCIIK7RGzYOvC7nAZn",
                "id": "2QmCKCIIK7RGzYOvC7nAZn",
                "name": "Aspy",
                "type": "artist",
                "uri": "spotify:artist:2QmCKCIIK7RGzYOvC7nAZn"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                },
                "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                "id": "3E7XNzGG6qqnjwV9nOCxQM",
                "name": "candyboii",
                "type": "artist",
                "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 142458,
        "explicit": true,
        "external_ids": {
            "isrc": "ROGRS2400389"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/2ApM2mZoLTVUSfLfKgTbRm"
        },
        "href": "https://api.spotify.com/v1/tracks/2ApM2mZoLTVUSfLfKgTbRm",
        "id": "2ApM2mZoLTVUSfLfKgTbRm",
        "is_local": false,
        "is_playable": true,
        "name": "ACTIVIST",
        "popularity": 43,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:2ApM2mZoLTVUSfLfKgTbRm"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5YuaZB0y4pVVgoes38XyY8"
                    },
                    "href": "https://api.spotify.com/v1/artists/5YuaZB0y4pVVgoes38XyY8",
                    "id": "5YuaZB0y4pVVgoes38XyY8",
                    "name": "Verty",
                    "type": "artist",
                    "uri": "spotify:artist:5YuaZB0y4pVVgoes38XyY8"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                    },
                    "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                    "id": "3E7XNzGG6qqnjwV9nOCxQM",
                    "name": "candyboii",
                    "type": "artist",
                    "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/2MbiLrC9inVWzKdh7oGuGv"
            },
            "href": "https://api.spotify.com/v1/albums/2MbiLrC9inVWzKdh7oGuGv",
            "id": "2MbiLrC9inVWzKdh7oGuGv",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2730ce4ff1e89f0133e80193c2c",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e020ce4ff1e89f0133e80193c2c",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048510ce4ff1e89f0133e80193c2c",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "N-am ratat",
            "release_date": "2024-09-20",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:2MbiLrC9inVWzKdh7oGuGv"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5YuaZB0y4pVVgoes38XyY8"
                },
                "href": "https://api.spotify.com/v1/artists/5YuaZB0y4pVVgoes38XyY8",
                "id": "5YuaZB0y4pVVgoes38XyY8",
                "name": "Verty",
                "type": "artist",
                "uri": "spotify:artist:5YuaZB0y4pVVgoes38XyY8"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                },
                "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                "id": "3E7XNzGG6qqnjwV9nOCxQM",
                "name": "candyboii",
                "type": "artist",
                "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 178971,
        "explicit": false,
        "external_ids": {
            "isrc": "ROGRA2400536"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/7IjUwgeR2Y4ZSWgu7bV6aM"
        },
        "href": "https://api.spotify.com/v1/tracks/7IjUwgeR2Y4ZSWgu7bV6aM",
        "id": "7IjUwgeR2Y4ZSWgu7bV6aM",
        "is_local": false,
        "is_playable": true,
        "name": "N-am ratat",
        "popularity": 29,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7IjUwgeR2Y4ZSWgu7bV6aM"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6ePos5c3kNe3hGKzx4jV8b"
                    },
                    "href": "https://api.spotify.com/v1/artists/6ePos5c3kNe3hGKzx4jV8b",
                    "id": "6ePos5c3kNe3hGKzx4jV8b",
                    "name": "FRVNCO",
                    "type": "artist",
                    "uri": "spotify:artist:6ePos5c3kNe3hGKzx4jV8b"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/0OfLnbazgQSbzJBXBblv3j"
            },
            "href": "https://api.spotify.com/v1/albums/0OfLnbazgQSbzJBXBblv3j",
            "id": "0OfLnbazgQSbzJBXBblv3j",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273f053891bc012c3f694cb860c",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02f053891bc012c3f694cb860c",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851f053891bc012c3f694cb860c",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "Bacardi",
            "release_date": "2024-06-21",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:0OfLnbazgQSbzJBXBblv3j"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/6ePos5c3kNe3hGKzx4jV8b"
                },
                "href": "https://api.spotify.com/v1/artists/6ePos5c3kNe3hGKzx4jV8b",
                "id": "6ePos5c3kNe3hGKzx4jV8b",
                "name": "FRVNCO",
                "type": "artist",
                "uri": "spotify:artist:6ePos5c3kNe3hGKzx4jV8b"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3Utphh7yje1TdEU8YKKkFb"
                },
                "href": "https://api.spotify.com/v1/artists/3Utphh7yje1TdEU8YKKkFb",
                "id": "3Utphh7yje1TdEU8YKKkFb",
                "name": "Benzei",
                "type": "artist",
                "uri": "spotify:artist:3Utphh7yje1TdEU8YKKkFb"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 139736,
        "explicit": false,
        "external_ids": {
            "isrc": "QZNWX2473541"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/4QB4CYVnCMJeCS1lbiFy91"
        },
        "href": "https://api.spotify.com/v1/tracks/4QB4CYVnCMJeCS1lbiFy91",
        "id": "4QB4CYVnCMJeCS1lbiFy91",
        "is_local": false,
        "is_playable": true,
        "name": "Bacardi",
        "popularity": 14,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4QB4CYVnCMJeCS1lbiFy91"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3uR0BLXGAv5YciM8meWqmO"
                    },
                    "href": "https://api.spotify.com/v1/artists/3uR0BLXGAv5YciM8meWqmO",
                    "id": "3uR0BLXGAv5YciM8meWqmO",
                    "name": "LilCagula",
                    "type": "artist",
                    "uri": "spotify:artist:3uR0BLXGAv5YciM8meWqmO"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/1fa0xFGKRrd2SmJeF0O24H"
            },
            "href": "https://api.spotify.com/v1/albums/1fa0xFGKRrd2SmJeF0O24H",
            "id": "1fa0xFGKRrd2SmJeF0O24H",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273cc9f6dd7812756c9f58667f4",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02cc9f6dd7812756c9f58667f4",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851cc9f6dd7812756c9f58667f4",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "VECINA",
            "release_date": "2024-06-20",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:1fa0xFGKRrd2SmJeF0O24H"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3uR0BLXGAv5YciM8meWqmO"
                },
                "href": "https://api.spotify.com/v1/artists/3uR0BLXGAv5YciM8meWqmO",
                "id": "3uR0BLXGAv5YciM8meWqmO",
                "name": "LilCagula",
                "type": "artist",
                "uri": "spotify:artist:3uR0BLXGAv5YciM8meWqmO"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 145557,
        "explicit": true,
        "external_ids": {
            "isrc": "QZNWX2458485"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/3kzEcKO7SI5onRCuKXIkSv"
        },
        "href": "https://api.spotify.com/v1/tracks/3kzEcKO7SI5onRCuKXIkSv",
        "id": "3kzEcKO7SI5onRCuKXIkSv",
        "is_local": false,
        "is_playable": true,
        "name": "VECINA",
        "popularity": 27,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3kzEcKO7SI5onRCuKXIkSv"
    },
    {
        "album": {
            "album_type": "album",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6dKPNkSEQOrRRvZz63Y47F"
                    },
                    "href": "https://api.spotify.com/v1/artists/6dKPNkSEQOrRRvZz63Y47F",
                    "id": "6dKPNkSEQOrRRvZz63Y47F",
                    "name": "Oscar",
                    "type": "artist",
                    "uri": "spotify:artist:6dKPNkSEQOrRRvZz63Y47F"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/39dQh4PXgRi6XJqdjqbLPV"
            },
            "href": "https://api.spotify.com/v1/albums/39dQh4PXgRi6XJqdjqbLPV",
            "id": "39dQh4PXgRi6XJqdjqbLPV",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2735017f9f1af86ce6cef778208",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e025017f9f1af86ce6cef778208",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048515017f9f1af86ce6cef778208",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "ȘTEFAN IV EVER",
            "release_date": "2024-08-02",
            "release_date_precision": "day",
            "total_tracks": 24,
            "type": "album",
            "uri": "spotify:album:39dQh4PXgRi6XJqdjqbLPV"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/6dKPNkSEQOrRRvZz63Y47F"
                },
                "href": "https://api.spotify.com/v1/artists/6dKPNkSEQOrRRvZz63Y47F",
                "id": "6dKPNkSEQOrRRvZz63Y47F",
                "name": "Oscar",
                "type": "artist",
                "uri": "spotify:artist:6dKPNkSEQOrRRvZz63Y47F"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                },
                "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                "id": "3E7XNzGG6qqnjwV9nOCxQM",
                "name": "candyboii",
                "type": "artist",
                "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3w8r8LEPG3zHNvRCj92b58"
                },
                "href": "https://api.spotify.com/v1/artists/3w8r8LEPG3zHNvRCj92b58",
                "id": "3w8r8LEPG3zHNvRCj92b58",
                "name": "Stefan Costea",
                "type": "artist",
                "uri": "spotify:artist:3w8r8LEPG3zHNvRCj92b58"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 2,
        "duration_ms": 217686,
        "explicit": false,
        "external_ids": {
            "isrc": "ROGRS2400324"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/5as0qIPZAwsFRnpEMQDQr1"
        },
        "href": "https://api.spotify.com/v1/tracks/5as0qIPZAwsFRnpEMQDQr1",
        "id": "5as0qIPZAwsFRnpEMQDQr1",
        "is_local": false,
        "is_playable": true,
        "name": "RUN UP 2",
        "popularity": 34,
        "preview_url": null,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:5as0qIPZAwsFRnpEMQDQr1"
    },
    {
        "album": {
            "album_type": "album",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5RqcTk3xp9dW1BLsdQ0NE9"
                    },
                    "href": "https://api.spotify.com/v1/artists/5RqcTk3xp9dW1BLsdQ0NE9",
                    "id": "5RqcTk3xp9dW1BLsdQ0NE9",
                    "name": "Aerozen",
                    "type": "artist",
                    "uri": "spotify:artist:5RqcTk3xp9dW1BLsdQ0NE9"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/0oAlEarGdHNBAUbkWwnhjK"
            },
            "href": "https://api.spotify.com/v1/albums/0oAlEarGdHNBAUbkWwnhjK",
            "id": "0oAlEarGdHNBAUbkWwnhjK",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27377ea5a7483bf059e985400de",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0277ea5a7483bf059e985400de",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485177ea5a7483bf059e985400de",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "NOTSOZEN",
            "release_date": "2024-09-13",
            "release_date_precision": "day",
            "total_tracks": 18,
            "type": "album",
            "uri": "spotify:album:0oAlEarGdHNBAUbkWwnhjK"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5RqcTk3xp9dW1BLsdQ0NE9"
                },
                "href": "https://api.spotify.com/v1/artists/5RqcTk3xp9dW1BLsdQ0NE9",
                "id": "5RqcTk3xp9dW1BLsdQ0NE9",
                "name": "Aerozen",
                "type": "artist",
                "uri": "spotify:artist:5RqcTk3xp9dW1BLsdQ0NE9"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/6oCCIhNLreyOTp3krqOfeM"
                },
                "href": "https://api.spotify.com/v1/artists/6oCCIhNLreyOTp3krqOfeM",
                "id": "6oCCIhNLreyOTp3krqOfeM",
                "name": "FLORIS",
                "type": "artist",
                "uri": "spotify:artist:6oCCIhNLreyOTp3krqOfeM"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 166521,
        "explicit": true,
        "external_ids": {
            "isrc": "ROGRS2400401"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/1nJDg2DZPzeODraGMMJtn4"
        },
        "href": "https://api.spotify.com/v1/tracks/1nJDg2DZPzeODraGMMJtn4",
        "id": "1nJDg2DZPzeODraGMMJtn4",
        "is_local": false,
        "is_playable": true,
        "name": "BUSINEZZ",
        "popularity": 34,
        "preview_url": null,
        "track_number": 14,
        "type": "track",
        "uri": "spotify:track:1nJDg2DZPzeODraGMMJtn4"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0GoJXmDr5UBG8ValCZe4om"
                    },
                    "href": "https://api.spotify.com/v1/artists/0GoJXmDr5UBG8ValCZe4om",
                    "id": "0GoJXmDr5UBG8ValCZe4om",
                    "name": "Ian",
                    "type": "artist",
                    "uri": "spotify:artist:0GoJXmDr5UBG8ValCZe4om"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5ysOQVQHHU9GJZBKmZMRHv"
                    },
                    "href": "https://api.spotify.com/v1/artists/5ysOQVQHHU9GJZBKmZMRHv",
                    "id": "5ysOQVQHHU9GJZBKmZMRHv",
                    "name": "Azteca",
                    "type": "artist",
                    "uri": "spotify:artist:5ysOQVQHHU9GJZBKmZMRHv"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/77AqgBXPY0mFmt1MoFnkZU"
            },
            "href": "https://api.spotify.com/v1/albums/77AqgBXPY0mFmt1MoFnkZU",
            "id": "77AqgBXPY0mFmt1MoFnkZU",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2731911af372fbdb91f5c201dea",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e021911af372fbdb91f5c201dea",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048511911af372fbdb91f5c201dea",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "Sigur Dar Incet",
            "release_date": "2020-05-05",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:77AqgBXPY0mFmt1MoFnkZU"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0GoJXmDr5UBG8ValCZe4om"
                },
                "href": "https://api.spotify.com/v1/artists/0GoJXmDr5UBG8ValCZe4om",
                "id": "0GoJXmDr5UBG8ValCZe4om",
                "name": "Ian",
                "type": "artist",
                "uri": "spotify:artist:0GoJXmDr5UBG8ValCZe4om"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5ysOQVQHHU9GJZBKmZMRHv"
                },
                "href": "https://api.spotify.com/v1/artists/5ysOQVQHHU9GJZBKmZMRHv",
                "id": "5ysOQVQHHU9GJZBKmZMRHv",
                "name": "Azteca",
                "type": "artist",
                "uri": "spotify:artist:5ysOQVQHHU9GJZBKmZMRHv"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 182775,
        "explicit": true,
        "external_ids": {
            "isrc": "TCAEW2036703"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/1GvAEveXYX53btltb0QCxm"
        },
        "href": "https://api.spotify.com/v1/tracks/1GvAEveXYX53btltb0QCxm",
        "id": "1GvAEveXYX53btltb0QCxm",
        "is_local": false,
        "is_playable": true,
        "name": "Sigur Dar Incet",
        "popularity": 42,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1GvAEveXYX53btltb0QCxm"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3uR0BLXGAv5YciM8meWqmO"
                    },
                    "href": "https://api.spotify.com/v1/artists/3uR0BLXGAv5YciM8meWqmO",
                    "id": "3uR0BLXGAv5YciM8meWqmO",
                    "name": "LilCagula",
                    "type": "artist",
                    "uri": "spotify:artist:3uR0BLXGAv5YciM8meWqmO"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/7gNWRyyfbldCdOyPTe3u1p"
            },
            "href": "https://api.spotify.com/v1/albums/7gNWRyyfbldCdOyPTe3u1p",
            "id": "7gNWRyyfbldCdOyPTe3u1p",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273ecd0283985b2eb34a9533bd5",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02ecd0283985b2eb34a9533bd5",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851ecd0283985b2eb34a9533bd5",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "R.A.R",
            "release_date": "2024-08-02",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:7gNWRyyfbldCdOyPTe3u1p"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3uR0BLXGAv5YciM8meWqmO"
                },
                "href": "https://api.spotify.com/v1/artists/3uR0BLXGAv5YciM8meWqmO",
                "id": "3uR0BLXGAv5YciM8meWqmO",
                "name": "LilCagula",
                "type": "artist",
                "uri": "spotify:artist:3uR0BLXGAv5YciM8meWqmO"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5YDpXba8rTzapgSCFaTeP2"
                },
                "href": "https://api.spotify.com/v1/artists/5YDpXba8rTzapgSCFaTeP2",
                "id": "5YDpXba8rTzapgSCFaTeP2",
                "name": "BIT",
                "type": "artist",
                "uri": "spotify:artist:5YDpXba8rTzapgSCFaTeP2"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 168556,
        "explicit": true,
        "external_ids": {
            "isrc": "QZTB22418730"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/2mUfDvAVBFvjK9aHsj6SM3"
        },
        "href": "https://api.spotify.com/v1/tracks/2mUfDvAVBFvjK9aHsj6SM3",
        "id": "2mUfDvAVBFvjK9aHsj6SM3",
        "is_local": false,
        "is_playable": true,
        "name": "R.A.R",
        "popularity": 35,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2mUfDvAVBFvjK9aHsj6SM3"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                    },
                    "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                    "id": "3E7XNzGG6qqnjwV9nOCxQM",
                    "name": "candyboii",
                    "type": "artist",
                    "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6ocuMBOl5OFS3AViv3DnG6"
                    },
                    "href": "https://api.spotify.com/v1/artists/6ocuMBOl5OFS3AViv3DnG6",
                    "id": "6ocuMBOl5OFS3AViv3DnG6",
                    "name": "RAVA",
                    "type": "artist",
                    "uri": "spotify:artist:6ocuMBOl5OFS3AViv3DnG6"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/334691RicEmDE1zYDvPk19"
            },
            "href": "https://api.spotify.com/v1/albums/334691RicEmDE1zYDvPk19",
            "id": "334691RicEmDE1zYDvPk19",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2739ccbca6a74c792290d85af24",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e029ccbca6a74c792290d85af24",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048519ccbca6a74c792290d85af24",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "Kylie Jenner",
            "release_date": "2024-09-13",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:334691RicEmDE1zYDvPk19"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                },
                "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                "id": "3E7XNzGG6qqnjwV9nOCxQM",
                "name": "candyboii",
                "type": "artist",
                "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/6ocuMBOl5OFS3AViv3DnG6"
                },
                "href": "https://api.spotify.com/v1/artists/6ocuMBOl5OFS3AViv3DnG6",
                "id": "6ocuMBOl5OFS3AViv3DnG6",
                "name": "RAVA",
                "type": "artist",
                "uri": "spotify:artist:6ocuMBOl5OFS3AViv3DnG6"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 181771,
        "explicit": true,
        "external_ids": {
            "isrc": "ROGRS2400372"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/26yMwoEBtLRYAUcKKk0uIY"
        },
        "href": "https://api.spotify.com/v1/tracks/26yMwoEBtLRYAUcKKk0uIY",
        "id": "26yMwoEBtLRYAUcKKk0uIY",
        "is_local": false,
        "is_playable": true,
        "name": "Kylie Jenner",
        "popularity": 56,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:26yMwoEBtLRYAUcKKk0uIY"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                    },
                    "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                    "id": "3E7XNzGG6qqnjwV9nOCxQM",
                    "name": "candyboii",
                    "type": "artist",
                    "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/6lsdwkoHKpyVuIQsJoS4Km"
            },
            "href": "https://api.spotify.com/v1/albums/6lsdwkoHKpyVuIQsJoS4Km",
            "id": "6lsdwkoHKpyVuIQsJoS4Km",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273ca007f4ba2db4c8405f13b5f",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02ca007f4ba2db4c8405f13b5f",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851ca007f4ba2db4c8405f13b5f",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "scoalasex / toseina",
            "release_date": "2024-05-24",
            "release_date_precision": "day",
            "total_tracks": 2,
            "type": "album",
            "uri": "spotify:album:6lsdwkoHKpyVuIQsJoS4Km"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                },
                "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                "id": "3E7XNzGG6qqnjwV9nOCxQM",
                "name": "candyboii",
                "type": "artist",
                "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3goh4iJ1WNK7u2r6l4qW7M"
                },
                "href": "https://api.spotify.com/v1/artists/3goh4iJ1WNK7u2r6l4qW7M",
                "id": "3goh4iJ1WNK7u2r6l4qW7M",
                "name": "supernOva",
                "type": "artist",
                "uri": "spotify:artist:3goh4iJ1WNK7u2r6l4qW7M"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 96338,
        "explicit": true,
        "external_ids": {
            "isrc": "ROGRS2400132"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/2jC7LJOFKVRTjdsRODfrov"
        },
        "href": "https://api.spotify.com/v1/tracks/2jC7LJOFKVRTjdsRODfrov",
        "id": "2jC7LJOFKVRTjdsRODfrov",
        "is_local": false,
        "is_playable": true,
        "name": "toseina",
        "popularity": 35,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:2jC7LJOFKVRTjdsRODfrov"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/07nCYoPlXkWlhC2FHm1INS"
                    },
                    "href": "https://api.spotify.com/v1/artists/07nCYoPlXkWlhC2FHm1INS",
                    "id": "07nCYoPlXkWlhC2FHm1INS",
                    "name": "Marko Glass",
                    "type": "artist",
                    "uri": "spotify:artist:07nCYoPlXkWlhC2FHm1INS"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/7pyrxbNspDLhlN7SlitvHx"
            },
            "href": "https://api.spotify.com/v1/albums/7pyrxbNspDLhlN7SlitvHx",
            "id": "7pyrxbNspDLhlN7SlitvHx",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273e237012f3696fdebf1aa659c",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02e237012f3696fdebf1aa659c",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851e237012f3696fdebf1aa659c",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "BAGS IN THIS B*TCH",
            "release_date": "2024-09-06",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:7pyrxbNspDLhlN7SlitvHx"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/07nCYoPlXkWlhC2FHm1INS"
                },
                "href": "https://api.spotify.com/v1/artists/07nCYoPlXkWlhC2FHm1INS",
                "id": "07nCYoPlXkWlhC2FHm1INS",
                "name": "Marko Glass",
                "type": "artist",
                "uri": "spotify:artist:07nCYoPlXkWlhC2FHm1INS"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 138808,
        "explicit": true,
        "external_ids": {
            "isrc": "ROGRS2400414"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/0RGDLi89VQJLv2j5owaHcD"
        },
        "href": "https://api.spotify.com/v1/tracks/0RGDLi89VQJLv2j5owaHcD",
        "id": "0RGDLi89VQJLv2j5owaHcD",
        "is_local": false,
        "is_playable": true,
        "name": "BAGS IN THIS B*TCH",
        "popularity": 42,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0RGDLi89VQJLv2j5owaHcD"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                    },
                    "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                    "id": "3E7XNzGG6qqnjwV9nOCxQM",
                    "name": "candyboii",
                    "type": "artist",
                    "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/75RnHo0qvMKy6ytWZ0JS0U"
            },
            "href": "https://api.spotify.com/v1/albums/75RnHo0qvMKy6ytWZ0JS0U",
            "id": "75RnHo0qvMKy6ytWZ0JS0U",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273c4f3345606978e258654ed0a",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02c4f3345606978e258654ed0a",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851c4f3345606978e258654ed0a",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "##autist",
            "release_date": "2024-02-10",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:75RnHo0qvMKy6ytWZ0JS0U"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                },
                "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                "id": "3E7XNzGG6qqnjwV9nOCxQM",
                "name": "candyboii",
                "type": "artist",
                "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 124424,
        "explicit": true,
        "external_ids": {
            "isrc": "RUA1H2466738"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/5duGJdrbwWzj8pgcef2Aa6"
        },
        "href": "https://api.spotify.com/v1/tracks/5duGJdrbwWzj8pgcef2Aa6",
        "id": "5duGJdrbwWzj8pgcef2Aa6",
        "is_local": false,
        "is_playable": true,
        "name": "##autist",
        "popularity": 45,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5duGJdrbwWzj8pgcef2Aa6"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0wiXWJod6Ti69H7w5WE2uC"
                    },
                    "href": "https://api.spotify.com/v1/artists/0wiXWJod6Ti69H7w5WE2uC",
                    "id": "0wiXWJod6Ti69H7w5WE2uC",
                    "name": "Trippin",
                    "type": "artist",
                    "uri": "spotify:artist:0wiXWJod6Ti69H7w5WE2uC"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/68AUVMJQkx1HUZcHrjLYoF"
            },
            "href": "https://api.spotify.com/v1/albums/68AUVMJQkx1HUZcHrjLYoF",
            "id": "68AUVMJQkx1HUZcHrjLYoF",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2731a00dd2e3933e0cc7b394d7b",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e021a00dd2e3933e0cc7b394d7b",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048511a00dd2e3933e0cc7b394d7b",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "Banca",
            "release_date": "2021-05-28",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:68AUVMJQkx1HUZcHrjLYoF"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0wiXWJod6Ti69H7w5WE2uC"
                },
                "href": "https://api.spotify.com/v1/artists/0wiXWJod6Ti69H7w5WE2uC",
                "id": "0wiXWJod6Ti69H7w5WE2uC",
                "name": "Trippin",
                "type": "artist",
                "uri": "spotify:artist:0wiXWJod6Ti69H7w5WE2uC"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/6Nspm53g0iGjgJxTcwhqOl"
                },
                "href": "https://api.spotify.com/v1/artists/6Nspm53g0iGjgJxTcwhqOl",
                "id": "6Nspm53g0iGjgJxTcwhqOl",
                "name": "Mobtrap",
                "type": "artist",
                "uri": "spotify:artist:6Nspm53g0iGjgJxTcwhqOl"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/60Zeeqli4bGfe8xtkuToJS"
                },
                "href": "https://api.spotify.com/v1/artists/60Zeeqli4bGfe8xtkuToJS",
                "id": "60Zeeqli4bGfe8xtkuToJS",
                "name": "xnrst",
                "type": "artist",
                "uri": "spotify:artist:60Zeeqli4bGfe8xtkuToJS"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 96066,
        "explicit": true,
        "external_ids": {
            "isrc": "QZHN92170478"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/3qu6fWLNNQrqe45Q6p7UaW"
        },
        "href": "https://api.spotify.com/v1/tracks/3qu6fWLNNQrqe45Q6p7UaW",
        "id": "3qu6fWLNNQrqe45Q6p7UaW",
        "is_local": false,
        "is_playable": true,
        "name": "Banca",
        "popularity": 12,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3qu6fWLNNQrqe45Q6p7UaW"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                    },
                    "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                    "id": "3E7XNzGG6qqnjwV9nOCxQM",
                    "name": "candyboii",
                    "type": "artist",
                    "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/76PXovK0ZP0oHZaCvINhfI"
            },
            "href": "https://api.spotify.com/v1/albums/76PXovK0ZP0oHZaCvINhfI",
            "id": "76PXovK0ZP0oHZaCvINhfI",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273420967417316de8f939f183c",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02420967417316de8f939f183c",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851420967417316de8f939f183c",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "CANDY",
            "release_date": "2024-01-10",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:76PXovK0ZP0oHZaCvINhfI"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                },
                "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                "id": "3E7XNzGG6qqnjwV9nOCxQM",
                "name": "candyboii",
                "type": "artist",
                "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 94360,
        "explicit": true,
        "external_ids": {
            "isrc": "ROGRS2400573"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/658NsCdzvFRMkgoIvGXIKm"
        },
        "href": "https://api.spotify.com/v1/tracks/658NsCdzvFRMkgoIvGXIKm",
        "id": "658NsCdzvFRMkgoIvGXIKm",
        "is_local": false,
        "is_playable": true,
        "name": "CANDY",
        "popularity": 28,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:658NsCdzvFRMkgoIvGXIKm"
    },
    {
        "album": {
            "album_type": "album",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3qiHUAX7zY4Qnjx8TNUzVx"
                    },
                    "href": "https://api.spotify.com/v1/artists/3qiHUAX7zY4Qnjx8TNUzVx",
                    "id": "3qiHUAX7zY4Qnjx8TNUzVx",
                    "name": "Yeat",
                    "type": "artist",
                    "uri": "spotify:artist:3qiHUAX7zY4Qnjx8TNUzVx"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/1jXYc5gip5tqCTDOotfY5L"
            },
            "href": "https://api.spotify.com/v1/albums/1jXYc5gip5tqCTDOotfY5L",
            "id": "1jXYc5gip5tqCTDOotfY5L",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2739567b80f50a5b9f0178ae993",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e029567b80f50a5b9f0178ae993",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048519567b80f50a5b9f0178ae993",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "2093",
            "release_date": "2024-02-16",
            "release_date_precision": "day",
            "total_tracks": 22,
            "type": "album",
            "uri": "spotify:album:1jXYc5gip5tqCTDOotfY5L"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3qiHUAX7zY4Qnjx8TNUzVx"
                },
                "href": "https://api.spotify.com/v1/artists/3qiHUAX7zY4Qnjx8TNUzVx",
                "id": "3qiHUAX7zY4Qnjx8TNUzVx",
                "name": "Yeat",
                "type": "artist",
                "uri": "spotify:artist:3qiHUAX7zY4Qnjx8TNUzVx"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 172500,
        "explicit": true,
        "external_ids": {
            "isrc": "USUM72401643"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/0YThXX1dqUpYBLyJNAsF9N"
        },
        "href": "https://api.spotify.com/v1/tracks/0YThXX1dqUpYBLyJNAsF9N",
        "id": "0YThXX1dqUpYBLyJNAsF9N",
        "is_local": false,
        "is_playable": true,
        "name": "If We Being Rëal",
        "popularity": 79,
        "preview_url": null,
        "track_number": 21,
        "type": "track",
        "uri": "spotify:track:0YThXX1dqUpYBLyJNAsF9N"
    },
    {
        "album": {
            "album_type": "album",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/23hzc59PkIUau13dqXx5Ef"
                    },
                    "href": "https://api.spotify.com/v1/artists/23hzc59PkIUau13dqXx5Ef",
                    "id": "23hzc59PkIUau13dqXx5Ef",
                    "name": "ian",
                    "type": "artist",
                    "uri": "spotify:artist:23hzc59PkIUau13dqXx5Ef"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/0lmXfHj3QJAZBpoY9jdEbV"
            },
            "href": "https://api.spotify.com/v1/albums/0lmXfHj3QJAZBpoY9jdEbV",
            "id": "0lmXfHj3QJAZBpoY9jdEbV",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273a3d9d6750279f6b9b9c9ead9",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02a3d9d6750279f6b9b9c9ead9",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851a3d9d6750279f6b9b9c9ead9",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "Valedictorian [Deluxe]",
            "release_date": "2024-06-07",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:0lmXfHj3QJAZBpoY9jdEbV"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/23hzc59PkIUau13dqXx5Ef"
                },
                "href": "https://api.spotify.com/v1/artists/23hzc59PkIUau13dqXx5Ef",
                "id": "23hzc59PkIUau13dqXx5Ef",
                "name": "ian",
                "type": "artist",
                "uri": "spotify:artist:23hzc59PkIUau13dqXx5Ef"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 137158,
        "explicit": true,
        "external_ids": {
            "isrc": "USQX92402650"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/4oPLjuY1WgGTL0Ja1doDOn"
        },
        "href": "https://api.spotify.com/v1/tracks/4oPLjuY1WgGTL0Ja1doDOn",
        "id": "4oPLjuY1WgGTL0Ja1doDOn",
        "is_local": false,
        "is_playable": true,
        "name": "Magic Johnson",
        "popularity": 75,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:4oPLjuY1WgGTL0Ja1doDOn"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                    },
                    "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                    "id": "3E7XNzGG6qqnjwV9nOCxQM",
                    "name": "candyboii",
                    "type": "artist",
                    "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/6lsdwkoHKpyVuIQsJoS4Km"
            },
            "href": "https://api.spotify.com/v1/albums/6lsdwkoHKpyVuIQsJoS4Km",
            "id": "6lsdwkoHKpyVuIQsJoS4Km",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273ca007f4ba2db4c8405f13b5f",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02ca007f4ba2db4c8405f13b5f",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851ca007f4ba2db4c8405f13b5f",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "scoalasex / toseina",
            "release_date": "2024-05-24",
            "release_date_precision": "day",
            "total_tracks": 2,
            "type": "album",
            "uri": "spotify:album:6lsdwkoHKpyVuIQsJoS4Km"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3E7XNzGG6qqnjwV9nOCxQM"
                },
                "href": "https://api.spotify.com/v1/artists/3E7XNzGG6qqnjwV9nOCxQM",
                "id": "3E7XNzGG6qqnjwV9nOCxQM",
                "name": "candyboii",
                "type": "artist",
                "uri": "spotify:artist:3E7XNzGG6qqnjwV9nOCxQM"
            }
        ],
        "available_markets": [
        ],
        "disc_number": 1,
        "duration_ms": 88000,
        "explicit": true,
        "external_ids": {
            "isrc": "ROGRS2400131"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/594QsAeU4Dox25QEh0OHx2"
        },
        "href": "https://api.spotify.com/v1/tracks/594QsAeU4Dox25QEh0OHx2",
        "id": "594QsAeU4Dox25QEh0OHx2",
        "is_local": false,
        "is_playable": true,
        "name": "scoalasex",
        "popularity": 39,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:594QsAeU4Dox25QEh0OHx2"
    },
    {
        "album": {
            "album_type": "album",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
                    },
                    "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
                    "id": "0Y5tJX1MQlPlqiwlOH1tJY",
                    "name": "Travis Scott",
                    "type": "artist",
                    "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/41GuZcammIkupMPKH2OJ6I"
            },
            "href": "https://api.spotify.com/v1/albums/41GuZcammIkupMPKH2OJ6I",
            "id": "41GuZcammIkupMPKH2OJ6I",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851072e9faef2ef7b6db63834a3",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "ASTROWORLD",
            "release_date": "2018-08-03",
            "release_date_precision": "day",
            "total_tracks": 17,
            "type": "album",
            "uri": "spotify:album:41GuZcammIkupMPKH2OJ6I"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
                },
                "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
                "id": "0Y5tJX1MQlPlqiwlOH1tJY",
                "name": "Travis Scott",
                "type": "artist",
                "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
            }
        ],
        "available_markets": [

        ],
        "disc_number": 1,
        "duration_ms": 270714,
        "explicit": true,
        "external_ids": {
            "isrc": "USSM11806658"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/7wBJfHzpfI3032CSD7CE2m"
        },
        "href": "https://api.spotify.com/v1/tracks/7wBJfHzpfI3032CSD7CE2m",
        "id": "7wBJfHzpfI3032CSD7CE2m",
        "is_local": false,
        "is_playable": true,
        "name": "STARGAZING",
        "popularity": 73,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7wBJfHzpfI3032CSD7CE2m"
    },
    {
        "album": {
            "album_type": "single",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
                    },
                    "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
                    "id": "0Y5tJX1MQlPlqiwlOH1tJY",
                    "name": "Travis Scott",
                    "type": "artist",
                    "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
                }
            ],
            "available_markets": [
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/2uDTi1PlpSpvAv7IRAoAEU"
            },
            "href": "https://api.spotify.com/v1/albums/2uDTi1PlpSpvAv7IRAoAEU",
            "id": "2uDTi1PlpSpvAv7IRAoAEU",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273e42b5fea4ac4c3d6328b622b",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02e42b5fea4ac4c3d6328b622b",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851e42b5fea4ac4c3d6328b622b",
                    "width": 64
                }
            ],
            "is_playable": true,
            "name": "HIGHEST IN THE ROOM",
            "release_date": "2019-10-04",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:2uDTi1PlpSpvAv7IRAoAEU"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
                },
                "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
                "id": "0Y5tJX1MQlPlqiwlOH1tJY",
                "name": "Travis Scott",
                "type": "artist",
                "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
            }
        ],
        "available_markets": [
           
        ],
        "disc_number": 1,
        "duration_ms": 175720,
        "explicit": true,
        "external_ids": {
            "isrc": "USSM11904276"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/3eekarcy7kvN4yt5ZFzltW"
        },
        "href": "https://api.spotify.com/v1/tracks/3eekarcy7kvN4yt5ZFzltW",
        "id": "3eekarcy7kvN4yt5ZFzltW",
        "is_local": false,
        "is_playable": true,
        "name": "HIGHEST IN THE ROOM",
        "popularity": 85,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3eekarcy7kvN4yt5ZFzltW"
    }
]

  return (
    <BaseScene>

          {tracks.slice(0, 9).map((track, index) => {
            const textureUrl = track?.album?.images?.[0]?.url || 'noImg.jpg';
            const position = pos[index].position || [0, 0, 0]; 
            const artists = track.artists.map((artist) => artist.name)
            return (
              <BaseBox
                key={track.id}
                text={false}
                position={position}
                args={[2, 2, 2]}
                color="white"
                textureUrl={textureUrl}
                name={track.name}
                artists={artists}
                number={index}
              />
            );
          })}
      <BaseCharacter controls position={[0, 1, 12]} args={[0.5]} color="yellow" />
      <Sky />
    </BaseScene>
  );
};

export default TopTracksTest;
