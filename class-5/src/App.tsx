import { useState, useEffect } from 'react';

// Type alias for user IDs so we can clearly express the ID type throughout the app.
type UserId = string;

// Interface defines the shape of a User object.
// Optional properties are marked with ?. This demonstrates optional email, age, and bio fields.
interface User {
  id: UserId;
  name: string;
  email?: string;
  age?: number;
  bio?: string;
}

// Type alias for form data used when adding or updating a user.
type UserFormData = Omit<User, 'id'>;

interface UserFormProps {
  userToEdit?: User;
  onSave: (user: UserFormData) => void;
  onCancel: () => void;
}

function UserForm({ userToEdit, onSave, onCancel }: UserFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email ?? '');
      setAge(userToEdit.age !== undefined ? String(userToEdit.age) : '');
      setBio(userToEdit.bio ?? '');
    } else {
      setName('');
      setEmail('');
      setAge('');
      setBio('');
    }
  }, [userToEdit]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) {
      return;
    }

    const formData: UserFormData = {
      name: name.trim(),
      email: email.trim() || undefined,
      age: age.trim() ? Number(age.trim()) : undefined,
      bio: bio.trim() || undefined,
    };

    onSave(formData);
  };

  return (
    <form className="card form-card" onSubmit={handleSubmit}>
      <h2>{userToEdit ? 'Edit User' : 'Add New User'}</h2>

      <label>
        Name <span className="required">*</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter full name"
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email address"
        />
      </label>

      <label>
        Age
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          placeholder="Enter age"
          min="0"
        />
      </label>

      <label>
        Bio
        <textarea
          value={bio}
          onChange={(event) => setBio(event.target.value)}
          placeholder="Write a short bio"
          rows={4}
        />
      </label>

      <div className="button-row">
        <button type="submit" className="primary-button">
          {userToEdit ? 'Update User' : 'Add User'}
        </button>
        {userToEdit && (
          <button type="button" className="secondary-button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: UserId) => void;
}

function UserList({ users, onEdit, onDelete }: UserListProps) {
  if (users.length === 0) {
    return (
      <div className="card empty-state">
        <p>No users have been added yet. Use the form to create the first profile.</p>
      </div>
    );
  }

  return (
    <div className="user-grid">
      {users.map((user) => (
        <article key={user.id} className="card user-card">
          <div className="user-meta">
            <h3>{user.name}</h3>
            {user.email && <p>{user.email}</p>}
          </div>

          <div className="details">
            <p>
              <strong>Age:</strong> {user.age !== undefined ? user.age : 'Not specified'}
            </p>
            <p>
              <strong>Bio:</strong> {user.bio?.length ? user.bio : 'No bio provided'}
            </p>
          </div>

          <div className="button-row card-actions">
            <button className="secondary-button" onClick={() => onEdit(user)}>
              Edit
            </button>
            <button className="danger-button" onClick={() => onDelete(user.id)}>
              Delete
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);

  const addUser = (formData: UserFormData) => {
    const newUser: User = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      ...formData,
    };
    setUsers((current) => [newUser, ...current]);
    setUserToEdit(undefined);
  };

  const updateUser = (formData: UserFormData) => {
    if (!userToEdit) return;

    setUsers((current) =>
      current.map((user) =>
        user.id === userToEdit.id ? { ...user, ...formData } : user
      )
    );
    setUserToEdit(undefined);
  };

  const deleteUser = (id: UserId) => {
    setUsers((current) => current.filter((user) => user.id !== id));
    if (userToEdit?.id === id) {
      setUserToEdit(undefined);
    }
  };

  const handleSave = (formData: UserFormData) => {
    if (userToEdit) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
  };

  const handleEdit = (user: User) => {
    setUserToEdit(user);
  };

  const handleCancelEdit = () => {
    setUserToEdit(undefined);
  };

  return (
    <div className="app-shell">
      <header className="hero-card">
        <div>
          <h1>Simple User Profile Manager</h1>
          <p>
            Add, edit, and review user profiles with optional contact details and a short bio.
          </p>
        </div>
      </header>

      <main className="layout-grid">
        <section className="panel">
          <UserForm userToEdit={userToEdit} onSave={handleSave} onCancel={handleCancelEdit} />
        </section>

        <section className="panel">
          <div className="card list-header">
            <h2>All Users</h2>
            <p className="muted-text">Manage profiles using the action buttons below.</p>
          </div>
          <UserList users={users} onEdit={handleEdit} onDelete={deleteUser} />
        </section>
      </main>
    </div>
  );
}
