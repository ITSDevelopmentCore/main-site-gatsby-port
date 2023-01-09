
function extractFileName(file)
{
    if (file.target.files.length != 0)
    {
        setFile(file.target.files[0].name)
    }
    alert(file.target.files[0].name)
}