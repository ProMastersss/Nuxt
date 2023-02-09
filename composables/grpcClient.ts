import hero_pb from "./hero_pb";

export const useFindId = async (id: number) => {
  const client = new HeroServiceClient("localhost:50010");
  const request = new hero_pb.HeroById();
  request.setId(id);
  return await client.findOne(request, null);
};
