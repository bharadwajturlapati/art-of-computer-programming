import org.apache.commons.beanutils.ConvertUtils;
import org.apache.commons.beanutils.converters.IntegerConverter;

public class Convertionutils {

	public static void main(String[] args) {
		String test = "";
		ConvertUtils.register(new IntegerConverter(), Integer.class);
		System.out.println(ConvertUtils.convert(test, Integer.class));
	}
}
