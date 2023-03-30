import { urlFor } from "@/lib/sanity-client";
import { Zoom } from "@visx/zoom";
import Image from "next/image"

interface Props {
  value: any
}

const InlineImage = ({
  value,
}: Props) => {

  console.log(value)
  const width = value.asset.metadata.dimensions.width;
  const height = value.asset.metadata.dimensions.height;

  const initialTransform = {
    scaleX: 1.27,
    scaleY: 1.27,
    translateX: -211.62,
    translateY: 162.59,
    skewX: 0,
    skewY: 0,
  };

  return (
    <>
      <Zoom<SVGSVGElement>
        width={width}
        height={height}
        scaleXMin={1 / 2}
        scaleXMax={4}
        scaleYMin={1 / 2}
        scaleYMax={4}
        initialTransformMatrix={initialTransform}
      >
        {(zoom) => (
          <div className="relative w-full">
            <Image
              src={urlFor(value.asset).width(width).height(height).url()}
              alt={'Inline photo'}
              width={width}
              height={height}
            ></Image>
          </div>
        )}
      </Zoom>
    </>
  );
};

export default InlineImage;
