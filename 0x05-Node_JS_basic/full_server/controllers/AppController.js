/**
 * Contains the miscellaneous route handlers.
 * @author Adewale Fatoki <https://github.com/adewaleftk>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
