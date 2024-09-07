import Link from "next/link";

export default function NavItem({ href, name, activePage }) {
  return (
    <li className="font-semibold">
      <Link href={href} className="relative group">
        {name}
        <span
          className={`after:block after:bg-blue-600 after:content-[''] after:h-[3px] after:absolute after:left-0 after:-bottom-1 
  after:rounded-lg after:shadow-blue-800 after:shadow-sm
  ${
    activePage === name
      ? "after:w-full"
      : "after:w-0 after:transition-all after:duration-300  group-hover:after:w-full "
  } `}
        ></span>
      </Link>
    </li>
  );
}
