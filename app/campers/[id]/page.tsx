interface Props {
  params: Promise<{ id: string[] }>;
}

export default async function VehiclePage({ params }: Props) {
  const { id } = await params;
  return <div>VehiclePage {id}</div>;
}
