export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <>
      <div>{modal}</div>
      <div>{children}</div>
    </>
  )
}
