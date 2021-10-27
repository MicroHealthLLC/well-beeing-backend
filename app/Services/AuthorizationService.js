const ResourceNotFoundException = use("App/Exceptions/ResourceNotFoundException");
const InvalidAccessException = use("App/Exceptions/InvalidAccessException");

class AuthorizationService {
  verifyPermission(resource, user) {
    if (!resource) {
      throw new ResourceNotFoundException();
    }

    if (resource.user_id != user.id) {
      throw new InvalidAccessException();
    }
  }
}

module.exports = new AuthorizationService();
