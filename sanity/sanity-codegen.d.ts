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
        | Sanity.Ref.Ref_opbTvdiujMYAd7OO
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
        hsl?: Sanity.Ref.Ref_ZiQwlUxpcmb6uYba;
        hsv?: Sanity.Ref.Ref_wHY5ukGRCRngvIjV;
        rgb?: Sanity.Ref.Ref_ZthBOVPKJKgrql3K;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Employment =
    | {
        _id: string;
        _type: "employment";
        end?: string;
        references?: Sanity.Ref.Ref_c3r0fBsZUx2jTPs0[];
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
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Post =
    | {
        _id: string;
        _type: "post";
        author?: Sanity.Reference<Sanity.Ref.Ref_3puSQnpZth7S7OIN>;
        body?: Sanity.Ref.Ref_KcszBDJ3ZWeNOtyf;
        categories?: Sanity.Reference<Sanity.Ref.Ref_TCb96P0bGXi7DnB5>[];
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
        catetory?: Sanity.Reference<Sanity.Ref.Ref_TCb96P0bGXi7DnB5>;
        references?: Sanity.Ref.Ref_O45Fs1p3fNHBX0WE[];
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
        project?: Sanity.Reference<Sanity.Ref.Ref_jdYyizxSv38gBWR9>;
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
        source?: Sanity.Ref.Ref_uQvFtBYQ9QO2unv4;
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
        metadata?: Sanity.Ref.Ref_B0rIKCz0KQWlpx5B;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_uQvFtBYQ9QO2unv4;
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
        dimensions?: Sanity.Ref.Ref_meSUr5wwHnepsHqp;
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
        palette?: Sanity.Ref.Ref_OlwMFIbxHUevK6CK;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
        darkMuted?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
        darkVibrant?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
        dominant?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
        lightMuted?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
        lightVibrant?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
        muted?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
        vibrant?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
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
        employment?: Sanity.Reference<Sanity.Ref.Ref_4zWvlMf8SDhZEfX2>[];
        projects?: Sanity.Reference<Sanity.Ref.Ref_jdYyizxSv38gBWR9>[];
        skills?: Sanity.Reference<Sanity.Ref.Ref_5H1KSeJpMHG4FFGn>[];
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
        icon?: Sanity.Ref.Ref_gjBVtAsc1hfrxs3A;
        iconColor?: Sanity.Ref.Ref_02hzVgL50KTBZTb3;
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
        skill?: Sanity.Reference<Sanity.Ref.Ref_5H1KSeJpMHG4FFGn>;
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
  type Ref_02hzVgL50KTBZTb3 = {
    alpha?: number;
    hex?: string;
    hsl?: Sanity.Ref.Ref_ZiQwlUxpcmb6uYba;
    hsv?: Sanity.Ref.Ref_wHY5ukGRCRngvIjV;
    rgb?: Sanity.Ref.Ref_ZthBOVPKJKgrql3K;
  };
}
namespace Sanity.Ref {
  type Ref_3puSQnpZth7S7OIN =
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
  type Ref_4zWvlMf8SDhZEfX2 =
    | {
        _id: string;
        _type: "employment";
        end?: string;
        references?: Sanity.Ref.Ref_c3r0fBsZUx2jTPs0[];
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
  type Ref_5H1KSeJpMHG4FFGn =
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
        icon?: Sanity.Ref.Ref_gjBVtAsc1hfrxs3A;
        iconColor?: Sanity.Ref.Ref_02hzVgL50KTBZTb3;
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
  type Ref_B0rIKCz0KQWlpx5B = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_meSUr5wwHnepsHqp;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_OlwMFIbxHUevK6CK;
  };
}
namespace Sanity.Ref {
  type Ref_c3r0fBsZUx2jTPs0 = {
    percent?: number;
    project?: Sanity.Reference<Sanity.Ref.Ref_jdYyizxSv38gBWR9>;
  };
}
namespace Sanity.Ref {
  type Ref_gjBVtAsc1hfrxs3A = {
    name?: string;
    provider?: string;
  };
}
namespace Sanity.Ref {
  type Ref_jdYyizxSv38gBWR9 =
    | {
        _id: string;
        _type: "project";
        catetory?: Sanity.Reference<Sanity.Ref.Ref_TCb96P0bGXi7DnB5>;
        references?: Sanity.Ref.Ref_O45Fs1p3fNHBX0WE[];
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
  type Ref_KcszBDJ3ZWeNOtyf = (
    | Sanity.Ref.Ref_opbTvdiujMYAd7OO
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
  type Ref_meSUr5wwHnepsHqp = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_O45Fs1p3fNHBX0WE = {
    percent?: number;
    skill?: Sanity.Reference<Sanity.Ref.Ref_5H1KSeJpMHG4FFGn>;
  };
}
namespace Sanity.Ref {
  type Ref_OlwMFIbxHUevK6CK = {
    darkMuted?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
    darkVibrant?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
    dominant?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
    lightMuted?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
    lightVibrant?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
    muted?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
    vibrant?: Sanity.Ref.Ref_s4NVGUVbBFFBcfsJ;
  };
}
namespace Sanity.Ref {
  type Ref_opbTvdiujMYAd7OO = {
    code?: string;
    filename?: string;
    highlightedLines?: number[];
    language?: string;
  };
}
namespace Sanity.Ref {
  type Ref_s4NVGUVbBFFBcfsJ = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_TCb96P0bGXi7DnB5 =
    | {
        _id: string;
        _type: "category";
        description?: string;
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_uQvFtBYQ9QO2unv4 = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_wHY5ukGRCRngvIjV = {
    a?: number;
    h?: number;
    s?: number;
    v?: number;
  };
}
namespace Sanity.Ref {
  type Ref_ZiQwlUxpcmb6uYba = {
    a?: number;
    h?: number;
    l?: number;
    s?: number;
  };
}
namespace Sanity.Ref {
  type Ref_ZthBOVPKJKgrql3K = {
    a?: number;
    b?: number;
    g?: number;
    r?: number;
  };
}
