export const Alert = ({ description, title, type }) => {
  return (
    <div className="bd-example">
    <div className="w-full p-3" >
      <div className="relative justify-center items-center">
        <div class={`alert alert-${type}`} role="alert">
          <h4 class="alert-heading">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
    </div>
  )
}