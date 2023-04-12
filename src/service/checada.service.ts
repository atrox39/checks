import { Checada } from '../entity/checada.entity';
import { User } from '../entity/user.entity';
import dayjs from 'dayjs';

dayjs().format('YYYY-MM-DD HH:mm:ss');

export default class ChecadaService {
  static async checadasPorUsuario(id: number) {
    const user = await User.findOneById(id);
    if (user) {
      const lastChecada = await Checada.findOne({
        where: {
          usuario: {
            id: user.id,
          },
        },
        order: {
          id: 'DESC',
        },
      });
      if (lastChecada) {
        if (!lastChecada.hora_salida) {
          await Checada.update({
            id: lastChecada.id,
          }, {
            hora_salida: new Date(),
          });
        } else {
          await Checada.insert({
            hora_entrada: new Date(),
            usuario: user,
          });
        }
      } else {
        await Checada.insert({
          hora_entrada: new Date(),
          usuario: user,
        });
      }
      const updated = await Checada.findOne({
        where: {
          usuario: {
            id: user.id,
          },
        },
        order: {
          id: 'DESC',
        },
      });
      return updated;
    }
  }
}