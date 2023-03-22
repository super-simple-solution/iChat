import ChangeMode from './ChangeMode'
function Header() {
  return (
    <>
      <div>
        <div className="header flex-x-between items-center px-24 py-20 ">
          <div>1</div>
          <div>2</div>
          <ChangeMode />
        </div>
      </div>
    </>
  )
}

export default Header
