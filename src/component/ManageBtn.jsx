
function ManageBtn() {
  return (
    <div className="flex flex-row justify-center items-center  h-screen">
        <div className="flex flex-col" role="group">
            <button type="button" className="px-4 py-2 text-sm font-bold text-blue-700 bg-white border border-blue-200 rounded-l-lg hover:bg-blue-100 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-blue-700 dark:border-blue-600 dark:text-white dark:hover:bg-blue-600">
                출결관리
            </button>
            <button type="button" className="px-4 py-2 text-sm font-bold text-blue-700 bg-white border-t border-b border-blue-200 hover:bg-blue-100 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-blue-700 dark:border-blue-600 dark:text-white dark:hover:bg-blue-600">
                플레이어 관리
            </button>
            <button type="button" className="px-4 py-2 text-sm font-bold text-blue-700 bg-white border border-blue-200 rounded-r-lg hover:bg-blue-100 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-blue-700 dark:border-blue-600 dark:text-white dark:hover:bg-blue-600">
                신청서 관리
            </button>
        </div>
    </div>
  )
}

export default ManageBtn