import clsx from "clsx";

export default function Avatar({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt="avatar"
      className={clsx(
        "size-10 rounded-full object-cover object-center",
        className,
      )}
    />
  );
}
