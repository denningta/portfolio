/// <reference types="@sanity-codegen/types" />

namespace Sanity.Default.Client {
  type Config = {};
}
namespace Sanity.Default.Schema {
  type Author =
    | {
        _id: string;
        _type: "author";
        bio?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
        image?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        name?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type BlockContent =
    | (
        | Sanity.Ref.Ref_NrWtruufAW7fUEAC
        | {
            _key: string;
            _type: "block";
            children: {
              _key: string;
              _type: "span";
              marks?: unknown[];
              text?: string;
            }[];
            markDefs?: unknown[];
            style?: string;
          }
        | {
            asset: Sanity.Reference<{
              _type: "sanity.imageAsset";
              assetId: string;
              extension: string;
              metadata: {
                _type: "sanity.imageMetadata";
                dimensions: {
                  _type: "sanity.imageDimensions";
                  aspectRatio: number;
                  height: number;
                  width: number;
                };
                hasAlpha: boolean;
                isOpaque: boolean;
                lqip: string;
                palette: {
                  _type: "sanity.imagePalette";
                  darkMuted: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                  darkVibrant: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                  dominant: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                  lightMuted: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                  lightVibrant: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                  muted: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                  vibrant: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                };
              };
              mimeType: string;
              originalFilename: string;
              path: string;
              sha1hash: string;
              size: number;
              uploadId: string;
              url: string;
            }>;
            crop?: {
              _type: "sanity.imageCrop";
              bottom: number;
              left: number;
              right: number;
              top: number;
            };
            hotspot?: {
              _type: "sanity.imageHotspot";
              height: number;
              width: number;
              x: number;
              y: number;
            };
          }
      )[]
    | undefined;
}
namespace Sanity.Default.Schema {
  type Category =
    | {
        _id: string;
        _type: "category";
        description?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Code =
    | {
        code?: string;
        filename?: string;
        highlightedLines?: number[];
        language?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Color =
    | {
        alpha?: number;
        hex?: string;
        hsl?: Sanity.Ref.Ref_SEzVWqAaGIVcGgKl;
        hsv?: Sanity.Ref.Ref_McfYhAvgxvWGlHlE;
        rgb?: Sanity.Ref.Ref_h63HIML9WfDfnJci;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Employment =
    | {
        _id: string;
        _type: "employment";
        color?: Sanity.Ref.Ref_vbkH25o2JEs75bll;
        end?: string;
        references?: Sanity.Ref.Ref_IKw12nn17zndRHJ5[];
        shortDesc?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        start?: string;
        title?: string;
        years?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Geopoint =
    | {
        alt?: number;
        lat?: number;
        lng?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type HslaColor =
    | {
        a?: number;
        h?: number;
        l?: number;
        s?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type HsvaColor =
    | {
        a?: number;
        h?: number;
        s?: number;
        v?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type IconPicker =
    | {
        name?: string;
        provider?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Me =
    | {
        _id: string;
        _type: "me";
        bio?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
        name?: string;
        photo?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Post =
    | {
        _id: string;
        _type: "post";
        author?: Sanity.Reference<Sanity.Ref.Ref_cM1wwZPP8DmcS9nq>;
        body?: Sanity.Ref.Ref_jR45AXgQVY5PGnGL;
        categories?: Sanity.Reference<Sanity.Ref.Ref_bb3H97x0QE29LTtu>[];
        description?: string;
        featured?: boolean;
        mainImage?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        publishedAt?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Project =
    | {
        _id: string;
        _type: "project";
        catetory?: Sanity.Reference<Sanity.Ref.Ref_bb3H97x0QE29LTtu>;
        color?: Sanity.Ref.Ref_vbkH25o2JEs75bll;
        references?: Sanity.Ref.Ref_dDPy4QKhoOrQEjsw[];
        shortDesc?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type ProjectReference =
    | {
        percent?: number;
        project?: Sanity.Reference<Sanity.Ref.Ref_NHx01ACDh7LGPtcv>;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type RgbaColor =
    | {
        a?: number;
        b?: number;
        g?: number;
        r?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityAssetSourceData =
    | {
        id?: string;
        name?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityFileAsset =
    | {
        _id: string;
        _type: "sanity.fileAsset";
        altText?: string;
        assetId?: string;
        description?: string;
        extension?: string;
        label?: string;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_uIxHB3eZDwIsyWuI;
        title?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageAsset =
    | {
        _id: string;
        _type: "sanity.imageAsset";
        altText?: string;
        assetId?: string;
        description?: string;
        extension?: string;
        label?: string;
        metadata?: Sanity.Ref.Ref_19gVJYMtYznYktJR;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_uIxHB3eZDwIsyWuI;
        title?: string;
        uploadId?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageCrop =
    | {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageDimensions =
    | {
        aspectRatio?: number;
        height?: number;
        width?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageHotspot =
    | {
        height?: number;
        width?: number;
        x?: number;
        y?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageMetadata =
    | {
        blurHash?: string;
        dimensions?: Sanity.Ref.Ref_oOaAtnJph6AJpQe0;
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
        palette?: Sanity.Ref.Ref_ITg2gHuzGUHYgJUv;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
        darkMuted?: Sanity.Ref.Ref_RfnTygrswThd45sj;
        darkVibrant?: Sanity.Ref.Ref_RfnTygrswThd45sj;
        dominant?: Sanity.Ref.Ref_RfnTygrswThd45sj;
        lightMuted?: Sanity.Ref.Ref_RfnTygrswThd45sj;
        lightVibrant?: Sanity.Ref.Ref_RfnTygrswThd45sj;
        muted?: Sanity.Ref.Ref_RfnTygrswThd45sj;
        vibrant?: Sanity.Ref.Ref_RfnTygrswThd45sj;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePaletteSwatch =
    | {
        background?: string;
        foreground?: string;
        population?: number;
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Sankey =
    | {
        _id: string;
        _type: "sankey";
        employment?: Sanity.Reference<Sanity.Ref.Ref_kmf9Utahf7IgJ0MU>[];
        projects?: Sanity.Reference<Sanity.Ref.Ref_NHx01ACDh7LGPtcv>[];
        skills?: Sanity.Reference<Sanity.Ref.Ref_NprbVMhHW7OZYDCb>[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Skill =
    | {
        _id: string;
        _type: "skill";
        altIcon?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        color?: Sanity.Ref.Ref_vbkH25o2JEs75bll;
        icon?: Sanity.Ref.Ref_eWeGqT9eVF60cg2p;
        shortDesc?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SkillReference =
    | {
        percent?: number;
        skill?: Sanity.Reference<Sanity.Ref.Ref_NprbVMhHW7OZYDCb>;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Slug =
    | {
        current?: string;
        source?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_19gVJYMtYznYktJR = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_oOaAtnJph6AJpQe0;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_ITg2gHuzGUHYgJUv;
  };
}
namespace Sanity.Ref {
  type Ref_bb3H97x0QE29LTtu =
    | {
        _id: string;
        _type: "category";
        description?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_cM1wwZPP8DmcS9nq =
    | {
        _id: string;
        _type: "author";
        bio?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
        image?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        name?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_dDPy4QKhoOrQEjsw = {
    percent?: number;
    skill?: Sanity.Reference<Sanity.Ref.Ref_NprbVMhHW7OZYDCb>;
  };
}
namespace Sanity.Ref {
  type Ref_eWeGqT9eVF60cg2p = {
    name?: string;
    provider?: string;
  };
}
namespace Sanity.Ref {
  type Ref_h63HIML9WfDfnJci = {
    a?: number;
    b?: number;
    g?: number;
    r?: number;
  };
}
namespace Sanity.Ref {
  type Ref_IKw12nn17zndRHJ5 = {
    percent?: number;
    project?: Sanity.Reference<Sanity.Ref.Ref_NHx01ACDh7LGPtcv>;
  };
}
namespace Sanity.Ref {
  type Ref_ITg2gHuzGUHYgJUv = {
    darkMuted?: Sanity.Ref.Ref_RfnTygrswThd45sj;
    darkVibrant?: Sanity.Ref.Ref_RfnTygrswThd45sj;
    dominant?: Sanity.Ref.Ref_RfnTygrswThd45sj;
    lightMuted?: Sanity.Ref.Ref_RfnTygrswThd45sj;
    lightVibrant?: Sanity.Ref.Ref_RfnTygrswThd45sj;
    muted?: Sanity.Ref.Ref_RfnTygrswThd45sj;
    vibrant?: Sanity.Ref.Ref_RfnTygrswThd45sj;
  };
}
namespace Sanity.Ref {
  type Ref_jR45AXgQVY5PGnGL = (
    | Sanity.Ref.Ref_NrWtruufAW7fUEAC
    | {
        _key: string;
        _type: "block";
        children: {
          _key: string;
          _type: "span";
          marks?: unknown[];
          text?: string;
        }[];
        markDefs?: unknown[];
        style?: string;
      }
    | {
        asset: Sanity.Reference<{
          _type: "sanity.imageAsset";
          assetId: string;
          extension: string;
          metadata: {
            _type: "sanity.imageMetadata";
            dimensions: {
              _type: "sanity.imageDimensions";
              aspectRatio: number;
              height: number;
              width: number;
            };
            hasAlpha: boolean;
            isOpaque: boolean;
            lqip: string;
            palette: {
              _type: "sanity.imagePalette";
              darkMuted: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
              darkVibrant: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
              dominant: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
              lightMuted: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
              lightVibrant: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
              muted: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
              vibrant: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
            };
          };
          mimeType: string;
          originalFilename: string;
          path: string;
          sha1hash: string;
          size: number;
          uploadId: string;
          url: string;
        }>;
        crop?: {
          _type: "sanity.imageCrop";
          bottom: number;
          left: number;
          right: number;
          top: number;
        };
        hotspot?: {
          _type: "sanity.imageHotspot";
          height: number;
          width: number;
          x: number;
          y: number;
        };
      }
  )[];
}
namespace Sanity.Ref {
  type Ref_kmf9Utahf7IgJ0MU =
    | {
        _id: string;
        _type: "employment";
        color?: Sanity.Ref.Ref_vbkH25o2JEs75bll;
        end?: string;
        references?: Sanity.Ref.Ref_IKw12nn17zndRHJ5[];
        shortDesc?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        start?: string;
        title?: string;
        years?: number;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_McfYhAvgxvWGlHlE = {
    a?: number;
    h?: number;
    s?: number;
    v?: number;
  };
}
namespace Sanity.Ref {
  type Ref_NHx01ACDh7LGPtcv =
    | {
        _id: string;
        _type: "project";
        catetory?: Sanity.Reference<Sanity.Ref.Ref_bb3H97x0QE29LTtu>;
        color?: Sanity.Ref.Ref_vbkH25o2JEs75bll;
        references?: Sanity.Ref.Ref_dDPy4QKhoOrQEjsw[];
        shortDesc?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_NprbVMhHW7OZYDCb =
    | {
        _id: string;
        _type: "skill";
        altIcon?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        color?: Sanity.Ref.Ref_vbkH25o2JEs75bll;
        icon?: Sanity.Ref.Ref_eWeGqT9eVF60cg2p;
        shortDesc?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_NrWtruufAW7fUEAC = {
    code?: string;
    filename?: string;
    highlightedLines?: number[];
    language?: string;
  };
}
namespace Sanity.Ref {
  type Ref_oOaAtnJph6AJpQe0 = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_RfnTygrswThd45sj = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_SEzVWqAaGIVcGgKl = {
    a?: number;
    h?: number;
    l?: number;
    s?: number;
  };
}
namespace Sanity.Ref {
  type Ref_uIxHB3eZDwIsyWuI = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_vbkH25o2JEs75bll = {
    alpha?: number;
    hex?: string;
    hsl?: Sanity.Ref.Ref_SEzVWqAaGIVcGgKl;
    hsv?: Sanity.Ref.Ref_McfYhAvgxvWGlHlE;
    rgb?: Sanity.Ref.Ref_h63HIML9WfDfnJci;
  };
}
