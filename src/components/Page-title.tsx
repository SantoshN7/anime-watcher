
export default function PageTitle({title}: {title: String}) {
  return (
   <p className="flex flex-grow justify-center text-lg font-bold p-5">{ title }</p>   
  );
}