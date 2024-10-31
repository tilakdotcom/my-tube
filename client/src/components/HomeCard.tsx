import { VideoCardType } from '@/types/type';
import Image from 'next/image';

const VideoCard = ({ thumbnail,videoFile, owner_name, views, createdAt,title,uploadedAt,owner_image }:VideoCardType) => {
    return (
        <div className="">
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 w-full md:w-[350px] p-4 space-y-3 ">
            {/* Video Thumbnail */}
            <div className="relative w-full h-48">
                <Image
                    src={thumbnail}
                    alt="Video Thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>

            {/* Video Details */}
            <div className="flex space-x-3">
                {/* Channel Avatar */}
                {owner_image ?<Image
                    src={owner_image} // Update this with dynamic channel avatar if available
                    alt="Channel Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                />: (
                    <div className="w-10 h-10 rounded-full bg-gray-200" /> // Placeholder if no image
                )}
                

                {/* Title and Channel Info */}
                <div className="space-y-1">
                    <h3 className="text-md font-semibold text-gray-900 truncate">{title}</h3>
                    <p className="text-sm text-gray-600">{owner_name}</p>
                    <p className="text-sm text-gray-500">{views} views • {uploadedAt}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default VideoCard;
