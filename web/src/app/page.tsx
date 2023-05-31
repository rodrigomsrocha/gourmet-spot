import { Table } from '~/components/Table'

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-[3.75rem]">
      <Table />
      <Table />
      <Table isEmpty={false} />
      <Table />
      <Table />
      <Table isEmpty={false} />
      <Table />
      <Table isEmpty={false} />
      <Table />
      <Table />
    </div>
  )
}
