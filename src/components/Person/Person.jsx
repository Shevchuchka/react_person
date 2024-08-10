export const Person = ({ person }) => {
  let personState = <p>I am not married</p>;

  if (person.isMarried) {
    if (person.sex === 'm') {
      personState = <p>{`${person.partnerName} is my wife`}</p>;
    }

    if (person.sex === 'f') {
      personState = <p>{`${person.partnerName} is my husband`}</p>;
    }
  }

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${person.name}`}</h2>

        {person.age !== undefined && (
          <p className="Person__age">{`I am ${person.age}`}</p>
        )}

        <p className="Person__partner">{personState}</p>
      </section>
    </>
  );
};
