import ProfileBar from '../components/ProfileBar'

export default function OverviewPage() {
  return (
    <div className='p-6 flex gap-2 dark:bg-[#0D1117] bg-white'>
        <ProfileBar />
        <div className='border-zinc-300 border dark:border-zinc-600 flex-3 rounded-lg p-2'>OverviewReadme</div>
    </div>
  )
}
