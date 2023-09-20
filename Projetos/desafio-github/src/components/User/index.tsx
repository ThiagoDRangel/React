import './styles.css';
import IUser from '../../interface/IUser';

function User(props: IUser) {
  const { data } = props;

  return (
    <main className="user-container">
      <section className="user-img">
        <img src={data.avatar_url} alt="foto" />
      </section>

      <section className="user-infos">
        <p className="user-infos-content">Informações</p>
        <p className="user-url box"><strong>Perfil:</strong> {data.url}</p>
        <p className="box"><strong>Seguidores:</strong> {data.followers}</p>
        <p className="box"><strong>Localidade:</strong> {data.location}</p>
        <p className="box"><strong>Nome:</strong> {data.name}</p>
      </section>
    </main>
  );
}

export default User;
