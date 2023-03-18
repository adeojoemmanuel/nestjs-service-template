const UserStub = (): any => {
  return {
    email: 'test@test.com',
    password: 'hashedpass',
    verified: false,
    roles: [],
  };
};

const UserVerifyStub = (): any => {
  return {
    email: 'testVerify@test.com',
    password: 'hashedpass',
    verified: true,
    roles: [],
  };
};

const UserNotVerifyStub = (): any => {
  return {
    email: 'testnotVerify@test.com',
    password: 'hashedpass',
    verified: false,
    roles: [],
  };
};

const UserDocumentVerifyStub = (): any => {
  return {
    _id: 'id',
    email: 'testVerify@test.com',
    password: 'hashedpass',
    verified: false,
    roles: [],
  } as unknown as any;
};

// eslint-disable-next-line import/prefer-default-export, object-curly-newline
export { UserStub, UserVerifyStub, UserDocumentVerifyStub, UserNotVerifyStub };
