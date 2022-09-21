
export default function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img className="h-16 rounded-full border p-[2px]" src="https://scontent.fcra2-1.fna.fbcdn.net/v/t1.6435-9/161054004_3380644385374879_2393323840128663172_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nCEBwgVhMLIAX-UyI1R&_nc_ht=scontent.fcra2-1.fna&oh=00_AT_taiCD1JK_yUpibqTcxMyiTnQTPU-0hF8mIdEMbBpgeQ&oe=6351067D" alt="user-image" />
            <div className="flex-1 ml-4">
                <h2 className="font-bold">Narcis_97</h2>
                <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
            </div>
            <button className="font-semibold text-blue-400 text-sm">Sing out</button>
        </div>
    )
}
