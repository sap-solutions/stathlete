import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import DefaultProfile from '../../assets/profile.svg'
import { BsTrashFill } from 'react-icons/bs'
import { toast } from 'react-toastify'

function TeamItem({ team, showDelete }) {
  return (
    <div className="flex flex-row justify-between card shadow-md compact side bg-base-200">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="w-14 h-14">
              <img
                src={team.logo}
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{team.name}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/teams/${team.id}`}
          >
            View Team
          </Link>
        </div>
      </div>
      {showDelete ? (
        <button
          onClick={() => toast.warning('Cannot delete: feature in development')}
          className="close"
        >
          <BsTrashFill className="text-4xl mx-5 fill-error" />
        </button>
      ) : null}
    </div>
  )
}

export default TeamItem
