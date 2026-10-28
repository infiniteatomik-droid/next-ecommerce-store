interface Param {
    params: Promise<{id: string}>;
}

export default async function PageParams({params}: Param) {
    const {id} = await params

    return(
        <div>
            <h2>Current products id: {id}</h2>
        </div>
    )
}
/* На следующей неделе, когда изучим Data Fetching,
мы заменим этот id на реальный fetch-запрос к серверу,
 чтобы загружать данные конкретного товара */