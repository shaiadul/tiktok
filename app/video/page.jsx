import getAllVideo from "@/lib/getAllVideo";
import VideoPlayer from "../componants/videoPlayer";

export default async function Page() {
  const videoLink = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  ];

  return (
    <section className="container mx-auto my-10">
      <div className="mx-auto max-w-[300px] max-h-[600px] overflow-x-hidden overflow-y-auto scrollbar-hide bg-slate-300 ">
        {videoLink.map((video) => {
          return <VideoPlayer key={video} video={video} />;
        })}
      </div>
    </section>
  );
}
